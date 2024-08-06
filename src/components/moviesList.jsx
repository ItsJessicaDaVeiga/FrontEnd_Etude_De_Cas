import { useState, useEffect } from 'react';
import { movies$ } from "../api/movies"
import MovieCard from './movieCard';

function MoviesList () {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            console.log("Attends!")
            const fetchedMovies = await movies$;
            console.log("C'est bon!")
            setMovies(fetchedMovies);
            setCategories(getCategories(fetchedMovies));
        };
        fetchMovies();
    }, []);

    const getCategories = (movies) => {
        let availableCategories = ['All'];
        movies.forEach(movie => {
            if(!availableCategories.includes(movie.category)) {
                availableCategories.push(movie.category);
            }
        });
        console.log(availableCategories);
        return availableCategories
    };

    return (
        <div>

            <div className="px-10 mx-5 mt-10 p-4 bg-framboise text-cerisenoire font-medium rounded-md">
                <span>Categories : </span>
                <span> 
                    {categories.map(category => (
                        <div className="" key={category}>
                            <input type="checkbox" name={category}/>
                            <span>{category}</span>
                        </div>))
                    }
                </span>
            </div>

            <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {movies.map(movie => (< MovieCard movie={movie} key={movie.id} />))}
            </div>

        </div>
    )
}

export default MoviesList