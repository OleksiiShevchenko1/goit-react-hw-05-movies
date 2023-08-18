import Loader from 'components/Loader/Loader';
import { FormStyled } from 'components/MovieItem/Movieitem';
import MoviesList from 'components/MoviesList/MoviesList';
import { Section } from 'components/SharedLayout/SharedLayout.styled';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestSearchMovie } from 'services/api';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchSearchResult = async () => {
      try {
        setIsLoading(true);
        const moviesData = await requestSearchMovie(searchQuery);

        setMovies(moviesData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchResult();
  }, [searchQuery]);

  const onSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.children.search.value;
    searchValue.trim() !== '' && setSearchParams({ query: searchValue });
  };

  return (
    <Section>
      <FormStyled onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movies"
          name="search"
          defaultValue={searchQuery}
        />
        <button type="submit">Search</button>
      </FormStyled>

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

      {movies?.length > 0 && <MoviesList moviesList={movies} />}
    </Section>
  );
};

export default Movies;
