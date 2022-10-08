import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";

// 6a4c2096

const API_URL = "http://www.omdbapi.com?apikey=6a4c2096";

const movie1 = {
    "Title": "Entergalactic",
    "Year": "2022–",
    "imdbID": "tt10687116",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGMwYzdmYWYtY2E0Mi00NTBkLWJhNGEtNDZkMmM3NjVkMmQ2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&S=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    
        useEffect(()=>{
            searchMovies('Justice League');
        }, []);
    return (
        <>
        <div className="app">
            {/* Website Title */}
            <h1>Movies By Kevin</h1>

            {/* website searchbar */}
            <div className="search">
                <input placeholder="Search for movies"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
                {/* search svg */}
                <img src={searchIcon}
                 alt="search"
                 onClick={()=> searchMovies(search)}
                />
            </div>

            {
            movies?.length > 0 
            ? (
                <div className="container">
               {movies.map((movie) => (
                <MovieCard movie={movie} />
               ))}
                </div>
         ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
             )

        }


        </div>
        </>
    );
}
export default App;