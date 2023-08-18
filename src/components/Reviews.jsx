import { useEffect, useState } from 'react';
import { requestReviews } from 'services/api';
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const rwList = await requestReviews(movieId);
        setReviewsList(rwList.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchReviews();
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

      {reviewsList?.length > 0 ? (
        <ul>
          {reviewsList.map(result => {
            return (
              <li key={result.id}>
                <h3>Author: {result.author}</h3>
                <p>{result.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
