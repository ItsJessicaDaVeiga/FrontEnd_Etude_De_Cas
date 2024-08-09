import { useState, useEffect } from 'react';
import { movies$ } from "../api/movies"
import MovieCard from './movieCard';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


function MoviesList () {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]); 
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredMovies, setFilteredMovies]= useState([]);


    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await movies$;
            setMovies(fetchedMovies);
        };
        fetchMovies();
    }, []);

    //GESTION DES CATEGORIES DISPONIBLE DANS LES FILTRES
    useEffect(() => {
        const getCategories = () => { 
            let availableCategories = [];
            filteredMovies.forEach(movie => {
                if(!availableCategories.includes(movie.category)) {
                    availableCategories.push(movie.category);
                }
            });
            return availableCategories
        };
        setCategories(getCategories())
    }, [filteredMovies])

    //GESTION DE LA SELECTION DES FILTRES ET DE L'AFFICHAGE
    useEffect(() => {
        let newfilteredMovies = []
        if(selectedCategories.length === 0) {
            newfilteredMovies = movies
        } else {
            newfilteredMovies = movies.filter(movie => selectedCategories.includes(movie.category));
        }
        setFilteredMovies(newfilteredMovies);
    }, [movies,selectedCategories]); 


    const handleChangeFilter = (event) => {
        setSelectedCategories(event.target.value);
    }

    //GESTION DES LIKES ET DES DISLIKES  
    const handleLike = (id, isLiked) => {
        console.log(`Entré dans handleLike`, id);
        const newFilteredMovies = filteredMovies.map((movie) => { 
            if (movie.id === id) {
                console.log(`HandleLike rencontre un id identique`)
                const newMovie = movie
                newMovie.likes = isLiked ? movie.likes + 1 : movie.likes - 1
                return newMovie
            } 
            return movie
        }) 
        setFilteredMovies(newFilteredMovies);
    }

    const handleDislike = (id, isDisliked) => {
        const newFilteredMovie = filteredMovies.map((movie) => {
            if (movie.id === id) {
                const newMovie = movie
                newMovie.dislikes = isDisliked ? movie.dislikes + 1 : movie.dislikes - 1
                return newMovie
            }
            return movie
        });
        setFilteredMovies(newFilteredMovie);
    }

    //GESTION DE LA SUPPRESSION 
    const handleDelete = (id) => {
        const newMovies = filteredMovies.filter((movie) => movie.id !== id);
        setFilteredMovies(newMovies)
    }

    return (
        <div> 
            <div className="flex items-center px-5 py-8">
                <FormControl className="w-1/2">
                    <InputLabel id="multiple-select-label">Categories</InputLabel>
                    <Select
                        labelId="multiple-select-label"
                        id="multiple-select"
                        multiple
                        value={selectedCategories}
                        onChange={handleChangeFilter}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                    >
                        <MenuItem disabled value="">
                            <span>Categories</span>
                        </MenuItem>
                        {categories.map((category) => (
                            <MenuItem
                                key={category}
                                value={category}
                            >
                                {category}
                            </MenuItem>
                        ))}
                        
                    </Select>
                </FormControl>
            </div>
            <div className= "grid grid-cols-1 px-5 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredMovies.map(movie => (<MovieCard movie={movie} onLike={handleLike} onDislike={handleDislike} onDelete={handleDelete} key={movie.id} />))}
            </div>

        </div>
    )
    
}
export default MoviesList