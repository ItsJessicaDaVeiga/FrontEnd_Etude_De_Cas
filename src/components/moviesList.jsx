import { useState, useEffect } from 'react';
import { movies$ } from "../API/movies"

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
        <div>
            <h2 className='font-semibold'> Liste des films</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default MoviesList