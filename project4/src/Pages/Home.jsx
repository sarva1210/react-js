import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import tmdb from "../Api/tmdb";
import MovieCard from "../Components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params] = useSearchParams();

  const search = params.get("search");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const response = search
        ? await tmdb.get("/search/movie", {
            params: { query: search }
          })
        : await tmdb.get("/movie/popular");

      setMovies(response.data.results);
      setLoading(false);
    };

    fetchMovies();
  }, [search]);

  if (loading) return <h2 className="center">Loading...</h2>;

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
