import { useEffect, useState } from 'react';
import { requestCredits } from 'services/api';
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const ctList = await requestCredits(movieId);
        setCastList(ctList.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {error && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}

      {castList?.length > 0 && (
        <ul>
          {castList.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
