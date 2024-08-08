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
        let availableCategories = [];
        movies.forEach(movie => {
            if(!availableCategories.includes(movie.category)) {
                availableCategories.push(movie.category);
            }
        });
        console.log(availableCategories);
        return availableCategories
    };

    const handleLike = (id) => {
        console.log(`Coucou les likes`, id);
        const newMovies = movies.map((movie) => { 
            if (movie.id === id) {
                console.log(`Je suis dans le if de handleLike`)
                const newMovie = movie;
                newMovie.likes = newMovie.likes + 1;
                return newMovie
            } 
            return movie
        }) 
        console.log(newMovies)
        setMovies(newMovies)
        console.log(`LES NOUVEAUX FILMS SONT LAAA`,movies)
    }

    const handleDislike = (id) => {
        console.log("Coucou les haters", id);
        const newMovies = movies.map((movie) => {
            if (movie.id === id) {
                console.log("Dislike");
                const newMovie = movie;
                newMovie.dislikes = newMovie.dislikes + 1;
                return newMovie
            }
            return movie
        })
        console.log(newMovies)
        console.log("Les mal-aimées", movies)
    }

        // GERER LA SUPPRESSION
        const handleDelete = (id) => {
            const newMovies = movies.filter((movie) => movie.id !== id);
            setMovies(newMovies)
        }


    return (
        <div>
            <div className="flex flex-wrap m-7 p-4 bg-bubblegum text-cerisenoire rounded-full shadow-md">
                <div className='flex items-center justify-between w-full'>
                    {categories.map(category => (
                    <div key={category} className="">
                        <input type="checkbox" name={category}/> 
                        <span className="text-xs mx-2 md:text-sm">{category}</span>
                    </div>))
                    }
                </div>
            </div>

            <div className= "grid grid-cols-1 px-5 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {movies.map(movie => (<MovieCard movie={movie} onLike={handleLike} onDislike={handleDislike} onDelete={handleDelete} key={movie.id} />))}
            </div>

        </div>
    )
    
}

export default MoviesList