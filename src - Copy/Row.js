import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {
    const [Movies, setMovies]=useState([]);
    // Snippit of code that runns based on spesific condition

    useEffect(() => {

        async function fetchData(){

            const request= await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(request.data.results);
            return request;
        }
        fetchData()
        },
            // if [empty] run once and don't run it again
            // loads every time the external variable "fetchUrl" changes
        [fetchUrl]);

       console.table(Movies);
        
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/* several row posters */}

                {Movies.map(Movie => (
                    //Key makes loading faster by 
                    <img
                    key={Movie.id}
                    className="row_poster"
                     src={`${base_url}${Movie.poster_path}`}
                     alt={Movie.name}/>
                ))}
            </div>
            {/* container posters */}
        </div>
    )
}

export default Row;
