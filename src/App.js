import React from 'react'
import MovieApp from './MovieApp'
import Star from './Star.png';

const App = () => {
  return (
    <div>
        <img src={Star} alt="logo" className="logo"/>
        <MovieApp/>
    </div>
  )
}

export default App
