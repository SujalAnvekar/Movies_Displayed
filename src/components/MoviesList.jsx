import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ genre, searchQuery }) => {
  const API_KEY = "6613342521018f83a106e51c4c463ff1";

  const getGenreId = (genre) => {
    const map = {
      Action: 28,
      Horror: 27,
      Crime: 80,
      Romance: 10749,
      Adventure: 12,
    };
    return map[genre];
  };

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const baseAPI =
    searchQuery && searchQuery.trim() !== ""
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      : genre === "All"
      ? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${getGenreId(
          genre
        )}`;

  const fetchMovies = useCallback(async () => {
    if (!hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(`${baseAPI}&page=${page}`);
      const data = await res.json();

      if (data.results?.length) {
        setMovies((prev) => [...prev, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }, [baseAPI, page, hasMore]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
  }, [baseAPI]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        if (!loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="bg-black min-h-screen px-3 md:px-6 py-6 md:py-8">

      {/* HEADER */}
      <h1 className="text-white text-xl md:text-3xl font-bold mb-6 md:mb-8">
        🔥 {searchQuery ? "Search Results" : `${genre} Movies`}
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">

        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">

              {/* IMAGE */}
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://placehold.co/300x450?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-60 md:h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

              {/* ⭐ RATING */}
              <div className="absolute top-2 right-2 bg-black/60 text-yellow-400 text-[10px] md:text-xs px-2 py-1 rounded-full backdrop-blur-md">
                ⭐ {movie.vote_average.toFixed(1) || 0}
              </div>

              {/* TITLE */}
              <div className="absolute bottom-0 p-2 md:p-3 w-full">
                <h3 className="text-white text-xs md:text-sm font-semibold truncate group-hover:text-yellow-400 transition">
                  {movie.title}
                </h3>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center mt-8 md:mt-10 text-gray-400 text-sm md:text-base">
          Loading more movies...
        </div>
      )}

      {/* END */}
      {!hasMore && (
        <p className="text-gray-500 text-center mt-8 md:mt-10 text-sm md:text-base">
          No more movies to show
        </p>
      )}
    </div>
  );
};

export default MoviesList;