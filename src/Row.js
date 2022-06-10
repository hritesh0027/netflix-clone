import React, { useState, useEffect } from 'react'
import './Row.css';
import axios from 'axios';

const Row = (props) => {
    const { title, type, fetchit, fetchURL, isLargeRow = false } = props;

    const [movie, setMovie] = useState([]);
    
    const [movieTrail, setMovieTrail] = useState([]);
    
    const base_url = 'https://image.tmdb.org/t/p/original/';


    useEffect(() => {
        const instance = axios.create({
            baseURL: "https://api.themoviedb.org/3"
        });
            async function fetchData() {
                const res = await instance.get(fetchURL);
                setMovie(res.data.results);

                const results = await Promise.all(res.data.results.map(async (Movie) => {

                let ent_type = type;
                if(ent_type==='any') ent_type = Movie.media_type;
                let url1 = `/${ent_type}/${Movie.id}${fetchit}`;
                let res2 = await instance.get(url1);
                return <div key = {Movie.name} >{res2}</div>;
                }));
                const movieTrailers = [];
                results.forEach((result,idx)=>{
                    let res = result.props.children.data.videos.results;
                    if(res.length>0) {
                        res = res[0].key;
                        res = `https://www.youtube.com/watch?v=${res}`;
                    }
                    else
                        res = null;
                    movieTrailers.push(<div key = {result.props.children.data.id}>{res}</div>);
                })
            setMovieTrail(movieTrailers);
            return res;
        }
        fetchData();
    }, [fetchURL, fetchit, type]);

    return (
        <>
            <div className='row'>
                <h2>{title}</h2>
                <div className="row_posters">
                    {movie.map((Movie, idx) => 
                        (((isLargeRow && Movie.poster_path) || (!isLargeRow && Movie.backdrop_path)) && movieTrail[idx] && movieTrail[idx].props.children && 
                        <>
                        <a className = 'tooltip' href = {movieTrail[idx].props.children} target = '_blank' rel = 'noreferrer' key = {Movie.id}>
                            <div className = 'tooltiptext'>
                                {Movie.name}
                            </div>
                        <img
                            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                            src={`${base_url}${isLargeRow ? Movie.poster_path : Movie.backdrop_path}`}
                            key = {Movie.name}
                            alt={Movie.name} />
                        </a>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Row;
