import React, { useState } from 'react';
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';
import GenreFilter from '../components/GenreFilter';

const Home = () => {
  const [genre, setGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      
      <Header 
        genre={genre} 
        setSearchQuery={setSearchQuery}
      />

      <GenreFilter onSelectGenre={setGenre} />

      {/* ✅ FIX 2: pass searchQuery */}
      <MoviesList 
        genre={genre} 
        searchQuery={searchQuery} 
      />
    </>
  );
};

export default Home;