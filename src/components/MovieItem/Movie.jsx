import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { AditionalStyled, MovieStyled } from './Movieitem';
import { Section } from 'components/SharedLayout/SharedLayout.styled';

const Movie = ({ movie }) => {
  return (
    <Section>
      <MovieStyled>
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>OverView</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <span>{movie.genres.map(({ name }) => name).join(', ')}</span>
        </div>
      </MovieStyled>
      <AditionalStyled>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast"> Cast </Link>
          </li>
          <li>
            {' '}
            <Link to="reviews"> Reviews </Link>
          </li>
        </ul>
      </AditionalStyled>
      <Outlet />
    </Section>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};

export default Movie;
