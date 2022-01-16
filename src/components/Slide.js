import { useState, useEffect } from 'react';
import styles from './Slide.module.css';
import Movie from './Movie';

function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans(current => current + 400);
  };
  const onClickR = () => {
    if (trans <= -2800) {
      return;
    }
    setTrans(current => current - 400);
  };
  const getMovies = async () => {
    const json = await (await fetch(ytsApi)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.slide__show}>
          <div
            className={styles.slide}
            style={{
              transform: `translateX(${trans}px)`,
            }}
          >
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
      {loading ? null : (
        <div>
          <button className={styles.left} onClick={onClickL}>
            <i className="fas fa-caret-square-left"></i>
          </button>
          <button className={styles.right} onClick={onClickR}>
            <i className="fas fa-caret-square-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Slide;
