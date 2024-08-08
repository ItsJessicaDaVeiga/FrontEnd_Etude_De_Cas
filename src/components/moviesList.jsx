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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MoviesList () {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]); 
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredMovies, setFilteredMovies]= useState([]);


    useEffect(() => {
        const fetchMovies = async () => {
            //console.log("Attends!")
            const fetchedMovies = await movies$;
            //console.log("C'est bon!")
            setMovies(fetchedMovies);
            setCategories(getCategories(fetchedMovies));
            setFilteredMovies(fetchedMovies); // Affiche tous les films au chargement
        };
        fetchMovies();
    }, []);


    // GESTION DES CATEGORIES AFFICHEES EN CHECKBOX
    const getCategories = (movies) => { 
        let availableCategories = [];
        movies.forEach(movie => {
            if(!availableCategories.includes(movie.category)) {
                availableCategories.push(movie.category);
            }
        });
        //console.log(availableCategories);
        return availableCategories
    };

    // GESTION DE LA SELECTION DES FILTRES ET DE L'AFFICHAGE

    useEffect(() => {
        const newfilteredMovies = movies.filter(movie => selectedCategories.includes(movie.category));
        setFilteredMovies(newfilteredMovies);
    }, [movies,selectedCategories]); 

    const handleChangeFilter = (event) => {
        const value = event.target.value
        setSelectedCategories(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
    }

    //GESTION DES LIKES ET DISLIKES  
    const handleLike = (id, isLiked) => {
        console.log(`Entré dans handleLike`, id);
        const newMovies = movies.map((movie) => { 
            if (movie.id === id) {
                console.log(`HandleLike rencontre un id identique`)
                const newMovie = movie;
                newMovie.likes = isLiked ? newMovie.likes - 1 :newMovie.likes + 1
                return newMovie
            } 
            return movie
        }) 
        console.log(newMovies)
        setMovies(newMovies)
        console.log(`newMovie après handleLike:`,movies)
    }

    const handleDislike = (id, isDisliked) => {
        console.log(`Coucou les haters`, id);
        const newMovies = movies.map((movie) => {
            if (movie.id === id) {
                console.log(`HandleDislike rencontre un id identique`);
                const newMovie = movie;
                newMovie.dislikes = isDisliked ? newMovie.dislikes - 1 : newMovie.dislikes + 1
                return newMovie
            }
            return movie
        })
        console.log(newMovies)
    }

    // GESTION DE LA SUPPRESSION 
    const handleDelete = (id) => {
        const newMovies = movies.filter((movie) => movie.id !== id);
        setMovies(newMovies)
    }

   

    return (
        <div> 
            <FormControl className="w-64">
            <InputLabel id="multiple-select-label">Categories</InputLabel>
            <Select
                labelId="multiple-select-label"
                id="multiple-select"
                multiple
                value={selectedCategories}
                onChange={handleChangeFilter}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                MenuProps={MenuProps}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
            >
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
            <div className= "grid grid-cols-1 px-5 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredMovies.map(movie => (<MovieCard movie={movie} onLike={handleLike} onDislike={handleDislike} onDelete={handleDelete} key={movie.id} />))}
            </div>

        </div>
    )
    
}
export default MoviesList