import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from 'axios';
import Requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState('');
    const [url, setURL] = useState('');

    useEffect(() =>{
        const instance = axios.create({
            baseURL: "https://api.themoviedb.org/3"
        }
        );
        async function getData() {
            const response = await instance.get(Requests.fetchNetflixOriginals);
            const random = (len) =>{
                return Math.floor(Math.random() * (len-1));
            };
            let select = response.data.results[random(response.data.results.length)];
            setMovie(select);
            const url1 = await instance.get(`/tv/${select.id}${Requests.fetchMovie}`);
            setURL(url1.data.videos.results[0].key);
            return response;
        }
        getData();
    },[]);
    
    const truncate = (string , n) => {
        return(
            <>
            {string?.length>n?string.substring(0,n)+"...":string}
            </>
        );
    };

    return (
        <header className='header' style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center',
            opacity: '0.9'
        }}>
            <div className='banner_contents'>
                <h1 className = 'headline'>{movie.name}</h1>
                <a href = {`https://www.youtube.com/watch?v=${url}`} target = '_blank' rel = 'noreferrer'><button>Play</button></a>
                <button>My List</button>
                <p className = 'description'>{truncate(movie?.overview, 150)}</p>
            </div>

        <div className = 'banner--fadeBottom' />
        </header>
    )
}

export default Banner
