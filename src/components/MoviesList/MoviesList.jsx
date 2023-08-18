import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
