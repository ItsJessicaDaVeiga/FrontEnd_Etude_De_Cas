import { useState, useEffect } from 'react';
import { movies$ } from "../api/movies"
import MovieCard from './movieCard';

function MoviesList () {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            console.log("Attends!")
            const fetchedMovies = await movies$;
            console.log("C'est bon!")
            setMovies(fetchedMovies);
        };
        fetchMovies();
    }, [])

    return (
        <>
            <h2 className='font-semibold'> Liste des films</h2>
            <div className= "grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
                {movies.map(movie => (< MovieCard movie={movie} key={movie.id} />))}
            </div>
        </>
    )
}

export default MoviesList