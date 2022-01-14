import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    );
    const json = await response.json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.container}>
          {movies.map((movie, index) => (
            <Movie
              key={index}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
