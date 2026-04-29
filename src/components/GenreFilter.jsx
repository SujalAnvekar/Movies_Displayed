import React, { useState, useCallback } from "react";

const GenreFilter = ({ onSelectGenre }) => {
  const genres = ["All", "Action", "Horror", "Crime", "Romance", "Adventure"];
  const [active, setActive] = useState("All");

  const handleClick = useCallback(
    (genre) => {
      if (genre === active) return;
      setActive(genre);
      onSelectGenre(genre);
    },
    [active, onSelectGenre]
  );

  return (
    <div className="sticky top-16 z-40 bg-black/90 backdrop-blur-md py-3">
      
      {/* SCROLL CONTAINER */}
      <div className="flex gap-3 px-3 overflow-x-auto md:flex-wrap md:justify-center md:overflow-visible scrollbar-hide">
        
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleClick(genre)}
            className={`whitespace-nowrap px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold border backdrop-blur-md
            transform transition-all duration-300 ease-in-out
            active:scale-95 active:duration-100
            hover:scale-105
            ${
              active === genre
                ? "bg-yellow-500/90 text-black border-yellow-300 shadow-[0_0_18px_rgba(234,179,8,0.6)] scale-105"
                : "bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:text-yellow-400"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;