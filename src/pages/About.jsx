import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clapperboard, Film, Star } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">

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

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - STORY */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Personal <span className="text-yellow-400">Movie Universe</span>
          </h1>

          <p className="text-gray-400 mt-5 leading-relaxed">
            This application is built to give you a cinematic experience while
            browsing movies. From trending hits to top-rated masterpieces, everything
            is powered by real-time data from TMDB API.
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            Designed using React, React Router, and modern UI patterns inspired
            by Netflix and OTT platforms.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Film size={18} className="text-yellow-400" />
              Movies
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Star size={18} className="text-yellow-400" />
              Ratings
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Clapperboard size={18} className="text-yellow-400" />
              Trailers
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - STATS PANEL */}
        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md shadow-lg">

          <h2 className="text-xl font-semibold mb-6 text-center">
            App Highlights
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between bg-black/40 p-4 rounded-lg">
              <span className="text-gray-400">Movie Database</span>
              <span className="text-white">TMDB API</span>
            </div>

            <div className="flex justify-between bg-black/40 p-4 rounded-lg">
              <span className="text-gray-400">UI Style</span>
              <span className="text-white">Netflix Inspired</span>
            </div>

            <div className="flex justify-between bg-black/40 p-4 rounded-lg">
              <span className="text-gray-400">Framework</span>
              <span className="text-white">React JS</span>
            </div>

            <div className="flex justify-between bg-black/40 p-4 rounded-lg">
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