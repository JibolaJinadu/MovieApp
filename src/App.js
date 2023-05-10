import { Route, Routes } from 'react-router-dom';
import './index.css';
import MovieApp2 from './MovieAppp';
import { MovieDetails2 } from './MovieDetails2';
import Star from './Star.png';
// import MovieDetails from './MovieDetails';

function App() {
  return (
    <>
      <div>
        <img src={Star} alt="logo" className="logo"/>
        <MovieApp2 />
      </div>

      <Routes>
        <Route path='/' element={<MovieApp2/>}/>
        <Route path='/details' element={<MovieDetails2/>}/>
      </Routes>
    </>
  );
}

export default App;