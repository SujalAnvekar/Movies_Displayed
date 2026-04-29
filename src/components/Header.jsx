import React, { useState } from "react";
import SearchView from "./SearchView";
import { Link } from "react-router-dom";
import { Clapperboard, Menu, X } from "lucide-react";

const Header = ({ genre, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md shadow-black/40">
      
      {/* MAIN BAR (same as before on laptop) */}
      <div className="h-16 px-4 md:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Clapperboard size={22} className="text-yellow-400" />
          <h2 className="text-lg md:text-xl font-bold">Movies Mania</h2>
        </div>

        {/* NAV (desktop only) */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link to="/topmovies" className="hover:text-red-500 transition">
            Top Movies
          </Link>
          <Link to="/about" className="hover:text-red-500 transition">
            About
          </Link>
        </nav>

        {/* SEARCH (desktop only — SAME POSITION) */}
        <div className="hidden md:block w-1/3">
          <SearchView genre={genre} onSearch={setSearchQuery} />
        </div>

        {/* HAMBURGER (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-black">
          
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/topmovies" onClick={() => setIsOpen(false)}>
            Top Movies
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          {/* SEARCH (mobile) */}
          <SearchView genre={genre} onSearch={setSearchQuery} />
        </div>
      )}
    </header>
  );
};

export default Header;