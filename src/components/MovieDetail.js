import styles from './MovieDetail.module.css';
import { Link } from 'react-router-dom';

function MovieDetail({
  background_image_original,
  medium_cover_image,
  title_long,
  rating,
  runtime,
  genres,
  download_count,
  description_intro,
}) {
  return (
    <div>
      <img className={styles.bg} src={background_image_original} />
      <div className={styles.show}>
        <img className={styles.img} src={medium_cover_image} />
        <div className={styles.textbox}>
          <h1 className={styles.title}>{title_long}</h1>
          <div>
            {`★${rating} (${download_count}) ・ ${runtime}min ・ ${
              genres && genres.join(' / ')
            }`}
          </div>
          <p>{description_intro}</p>
          <Link to={`/`}>
            <button className={styles.toHome}>
              <i className="fas fa-caret-square-left"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
