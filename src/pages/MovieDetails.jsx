import Loader from 'components/Loader/Loader';
import Movie from 'components/MovieItem/Movie';
import { ButtonBack } from 'components/MovieItem/Movieitem';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { requestDetailsMovie } from 'services/api';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const mov = await requestDetailsMovie(movieId);
        setMovie(mov);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchMovieDetails();
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

      <Link to={backLinkRef.current ?? '/'}>
        {' '}
        <ButtonBack type="button">Go back</ButtonBack>
      </Link>

      {movie && <Movie movie={movie} />}
    </div>
  );
};

export default MovieDetails;
