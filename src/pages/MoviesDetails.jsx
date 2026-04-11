import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../components/useFetch";
import { ArrowLeft } from "lucide-react";

const MoviesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=6613342521018f83a106e51c4c463ff1`;

  const { data: movie, error, loading } = useFetch(API);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center bg-black text-red-500">
        Error loading movie
      </div>
    );

  if (!movie)
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        No Data Found
      </div>
    );

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden">

        {/* BACKDROP (FULL WIDTH + FIXED HEIGHT) */}
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : "https://placehold.co/1200x600?text=No+Image"
          }
          alt={movie.title}
          className="w-full h-[90vh] object-cover object-center"
        />

        {/* GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/30"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60"></div>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 z-20 flex items-center gap-2 
             bg-black/40 hover:bg-black/70 
             backdrop-blur-md px-5 py-2 rounded-full 
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

        {/* TITLE INFO */}
        <div className="absolute bottom-10 left-10 right-10 z-10 max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold">
            {movie.title}
          </h1>

          <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-300">

            <span className="bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>

            <span className="bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
              {movie.release_date}
            </span>

            <span className="bg-black/40 px-3 py-1 rounded-full backdrop-blur-md uppercase">
              {movie.original_language}
            </span>

          </div>

        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* POSTER */}
        <div className="flex justify-center">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://placehold.co/300x450?text=No+Image"
            }
            alt={movie.title}
            className="rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* DETAILS */}
        <div className="md:col-span-2 space-y-6">

          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-300">
              Overview
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {movie.overview || "No overview available"}
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-gray-400">Votes</p>
              <p className="text-white font-semibold">{movie.vote_count}</p>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-gray-400">Popularity</p>
              <p className="text-white font-semibold">{movie.popularity}</p>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-gray-400">Language</p>
              <p className="text-white font-semibold">
                {movie.original_language}
              </p>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-gray-400">Status</p>
              <p className="text-white font-semibold">{movie.status}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;