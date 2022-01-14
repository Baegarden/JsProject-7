// "홈 화면을 위한 Component"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, year, genres, rating }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img}></img>
      <div clasName={styles.movie_info}>
        <div>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
        </div>
        <div>{`${year} ・ ${genres.join(' / ')}`}</div>
        <div>★ {rating}</div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
