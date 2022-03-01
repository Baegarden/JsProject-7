// "홈 화면을 위한 Component"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, year, genres, rating }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img}></img>
      <div className={styles.movie_info}>
        <div>
          <h2 className={styles.movie_title}>
            <Link to={`/movie/${id}`}>
              {title.length > 50 ? `${title.slice(0, 50)}...` : title}
            </Link>
          </h2>
        </div>
        <div>{`${year} ★${rating}`}</div>
        {genres === undefined ? null : (
          <div className={styles.movie_genres}>
            {genres && genres.length > 1
              ? `${genres[0]} / ${genres[1]}`
              : genres[0]}
          </div>
        )}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
