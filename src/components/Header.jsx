import React from "react";
import SearchView from "./SearchView";
import { Link } from "react-router-dom";
import { Clapperboard } from "lucide-react";

const Header = ({ genre, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-50 h-16 bg-black text-white px-8 flex justify-between items-center shadow-md shadow-black/40">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Clapperboard size={22} className="text-yellow-400" />
        <h2 className="text-xl font-bold">Movies Mania</h2>
      </div>

      {/* NAV */}
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-red-500 transition">
          Home
        </Link>
        <Link to="topmovies" className="hover:text-red-500 transition">
          Top Movies
        </Link>
        <Link to="/about" className="hover:text-red-500 transition">
          About
        </Link>
      </nav>

      {/* SEARCH */}
      <div className="w-1/3">
        <SearchView genre={genre} onSearch={setSearchQuery} />
      </div>
    </header>
  );
};

export default Header;