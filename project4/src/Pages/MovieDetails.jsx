import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import tmdb from "../Api/tmdb";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await tmdb.get(`/movie/${id}`);
      setMovie(res.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h2 className="center">Loading...</h2>;

  return (
    <div className="details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>⭐ {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
