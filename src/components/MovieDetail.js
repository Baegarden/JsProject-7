import styles from './MovieDetail.module.css';

function MovieDetail({
  background_image_original,
  medium_cover_image,
  title_long,
  rating,
  runtime,
  genres,
  download_count,
}) {
  return (
    <div>
      <img className={styles.bg} src={background_image_original} />
      <div className={styles.show}>
        <img className={styles.img} src={medium_cover_image} />
        <div className={styles.textbox}>
          <h1 className={styles.title}>{title_long}</h1>
          <ul>
            <li>Rating {rating}</li>
            <li>Runtime {runtime}</li>
            <li>Download {download_count}</li>
            <li>
              Genres
              <ul>
                {genres &&
                  genres.map((genre, index) => <li key={index}>{genre}</li>)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
