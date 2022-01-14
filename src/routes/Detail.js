import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    console.log(json);
    setMovie(json.data.movie);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title}></img>
          <h2>
            {movie.title} ({movie.year})
          </h2>
          <p>{movie.description_intro}</p>
          <ul>
            {movie.genres &&
              movie.genres.map((p, index) => <li key={index}>{p}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
