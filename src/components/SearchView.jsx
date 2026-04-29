import React, { useState, useEffect } from 'react';

const SearchView = ({ genre, onSearch }) => {
  const [query, setQuery] = useState("");

  // 🔥 Debounce
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() !== "") {
        onSearch(query);
      }
    }, 200);

    return () => clearTimeout(delay);
  }, [query, onSearch]);

  // 🔘 Button search
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-4 md:my-6 px-2 md:px-0">
      <form 
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl shadow-lg rounded-2xl overflow-hidden"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${genre} movies...`}
          className="flex-1 px-3 md:px-4 py-2 outline-none border-none text-sm md:text-base"
        />

        <button 
          type="submit"
          className="bg-red-500 text-white px-4 md:px-6 text-sm md:text-base hover:bg-red-600 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchView;