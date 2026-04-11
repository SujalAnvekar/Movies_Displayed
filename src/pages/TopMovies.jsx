import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const navigate = useNavigate();
  const API_KEY = "6613342521018f83a106e51c4c463ff1";

  const fetchMovies = async (pageNum) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${pageNum}`
      );
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
  };

  // initial + page change fetch
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  // infinite scroll listener
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 200 >=
      document.documentElement.offsetHeight
    ) {
      if (!loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="bg-black min-h-screen px-6 py-8 relative">

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 
                   bg-transparent hover:bg-white/10 
                   backdrop-blur-md px-4 py-2 rounded-full 
                   text-white transition group"
      >
        <ArrowLeft
          size={18}
          className="transition group-hover:-translate-x-1 group-hover:text-yellow-400"
        />
        <span className="text-sm group-hover:text-yellow-400 transition">
          Back
        </span>
      </button>

      {/* HEADER */}
      <h1 className="text-white text-3xl font-bold mb-8 text-center">
        ⭐ Top Rated Movies
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">

              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://placehold.co/300x450?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

              {/* ⭐ Rating */}
              <div className="absolute top-2 right-2 bg-black/60 text-yellow-400 text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                {movie.vote_average?.toFixed(1)}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 p-3 w-full">
                <h3 className="text-white text-sm font-semibold truncate group-hover:text-yellow-400 transition">
                  {movie.title}
                </h3>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center mt-10 text-gray-400">
          Loading more movies...
        </div>
      )}

      {/* END */}
      {!hasMore && (
        <div className="text-center mt-10 text-gray-500">
          No more movies
        </div>
      )}
    </div>
  );
};

export default TopMovies;