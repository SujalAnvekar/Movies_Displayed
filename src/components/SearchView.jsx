import React, { useState, useEffect } from 'react';

const SearchView = ({ genre, onSearch }) => {
  const [query, setQuery] = useState("");

  // 🔥 Debounce (auto search while typing)
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() !== "") {
        onSearch(query);
      }
    }, 200); // adjust timing (300–500ms best)

    return () => clearTimeout(delay);
  }, [query, onSearch]);

  // 🔘 Button search (manual)
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-6">
      <form 
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl shadow-lg rounded-2xl overflow-hidden"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${genre} movies...`}
          className="flex-1 px-4 py-2 outline-none border-none"
        />

        <button 
          type="submit"
          className="bg-red-500 text-white px-6 hover:bg-red-600 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchView;