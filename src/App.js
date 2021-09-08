import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';

const API = 'https://imdb-api.com/en/API/Top250Movies/k_wo2zj4a8';
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fun = async () => {
      const mov = await axios.get(API);
      setMovies(mov.data.items)
    }
    fun();
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="input-group p-5">
          <input className="form-control search" placeholder="Search Here" type="text" onChange={(e) => {
            setSearchTerm(e.target.value);
          }} />
        </div>
        <div className="row">

          {movies.length > 0 && movies.filter((movie) => {
            if (searchTerm === "") {
              return movie
            } else if (movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return movie
            }
          }).map((movie) => <Home key={movie.id} movie={movie} />)}
        </div>

      </div>
    </div>
  );
}

export default App;
