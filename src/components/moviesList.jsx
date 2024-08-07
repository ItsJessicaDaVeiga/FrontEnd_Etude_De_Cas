import { useState, useEffect } from 'react';
import { movies$ } from "../api/movies"
import MovieCard from './movieCard';

function MoviesList () {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]); // Gere les etats des catégories
    //const [selectedCategories, setSelectedCategories] = useState([]);
    //const [filteredMovies, setFilteredMovies] = useState([]);

    // Le fetch
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


    // Liste des catégories disponibles
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

    /*const handleClick = (event) => {
        console.log("EVEEEENT",event)
        setSelectedCategories(event.target.selectedCategories);
        getFilteredMovies();
    }

    const getFilteredMovies = () => {
        //Mon tableau de filterdMovies
        const newMovies = movies.filter((movie) => selectedCategories.includes(movie.category)) //

        setFilteredMovies(newMovies)
    }*/


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
                {movies.map(movie => (< MovieCard movie={movie} key={movie.id} />))}
            </div>

        </div>
    )
}

export default MoviesList