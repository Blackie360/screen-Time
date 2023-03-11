import { useEffect } from 'react';
import './App.css';
// import searchIcon  from './svg';
//3466927
const API_URL = 'https://www.omdbapi.com?apikey=3466927';
const App  = () => {
  const  searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  console.log(data.search);
  }
  useEffect (() =>{
  searchMovies ('superman');
  },  []
  );
  return (
   <div className='app'>
    <h1>Screen Time</h1>
    <div className='search'>
      <input 
      placeholder='search for movies'
      value="spiderman"></input>
    </div>
   </div>
  );
}

export default App;
