import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <MovieDetail
          background_image_original={movie.background_image_original}
          medium_cover_image={movie.medium_cover_image}
          title_long={movie.title_long}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
          download_count={movie.download_count}
          description_intro={movie.description_intro}
        />
      )}
    </div>
  );
}

export default Detail;
