import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clapperboard, Film, Star } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-6 py-6 md:py-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-3 left-3 md:top-5 md:left-5 z-20 flex items-center gap-2 
        bg-black/40 hover:bg-black/70 backdrop-blur-md px-3 md:px-5 py-1.5 md:py-2 rounded-full 
        text-white transition group"
      >
        <ArrowLeft
          size={18}
          className="transition group-hover:-translate-x-1 group-hover:text-yellow-400"
        />
        <span className="text-xs md:text-sm group-hover:text-yellow-400 transition">
          Back
        </span>
      </button>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

        {/* LEFT */}
        <div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your Personal <span className="text-yellow-400">Movie Universe</span>
          </h1>

          <p className="text-gray-400 mt-4 md:mt-5 text-sm md:text-base leading-relaxed">
            This application is built to give you a cinematic experience while
            browsing movies. From trending hits to top-rated masterpieces, everything
            is powered by real-time data from TMDB API.
          </p>

          <p className="text-gray-500 mt-3 md:mt-4 text-xs md:text-sm">
            Designed using React, React Router, and modern UI patterns inspired
            by Netflix and OTT platforms.
          </p>

          {/* TAGS */}
          <div className="mt-6 md:mt-8 flex gap-2 md:gap-4 flex-wrap">

            <div className="flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
              <Film size={16} className="text-yellow-400" />
              Movies
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
              <Star size={16} className="text-yellow-400" />
              Ratings
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
              <Clapperboard size={16} className="text-yellow-400" />
              Trailers
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white/5 p-5 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-md shadow-lg">

          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center">
            App Highlights
          </h2>

          <div className="space-y-3 md:space-y-4 text-sm md:text-base">

            <div className="flex justify-between bg-black/40 p-3 md:p-4 rounded-lg">
              <span className="text-gray-400">Movie Database</span>
              <span className="text-white">TMDB API</span>
            </div>

            <div className="flex justify-between bg-black/40 p-3 md:p-4 rounded-lg">
              <span className="text-gray-400">UI Style</span>
              <span className="text-white">Netflix Inspired</span>
            </div>

            <div className="flex justify-between bg-black/40 p-3 md:p-4 rounded-lg">
              <span className="text-gray-400">Framework</span>
              <span className="text-white">React JS</span>
            </div>

            <div className="flex justify-between bg-black/40 p-3 md:p-4 rounded-lg">
              <span className="text-gray-400">Routing</span>
              <span className="text-white">React Router</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;