import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'services/api';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movList = await requestTrendingMovies();
        setMoviesList(movList.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
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
      {moviesList?.length > 0 && <MoviesList moviesList={moviesList} />}
    </section>
  );
};

export default Home;
