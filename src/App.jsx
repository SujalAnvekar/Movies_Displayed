import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import MoviesDetails from './pages/MoviesDetails'
import About from './pages/About'
import TopMovies from './pages/TopMovies'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MoviesDetails/>}/>
            <Route path='/topmovies' element={<TopMovies/>}/>
        <Route path='/about' element={<About/>}/>
    
      </Routes>
    </Router>
    </>
  )
}

export default App
