import PropTypes from "prop-types";
import EmptyHeartIcon from "../icons/4.png";
import EmptyDislikeIcon from "../icons/6.png";
import { useState } from "react";
import FilledHeartIcon from "../icons/5.png";
import FilledDislikeIcon from "../icons/7.png";



function MovieCard ({movie}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [likes, setLikes] = useState(movie.likes);
    const [dislikes, setDislikes] = useState(movie.dislikes);

    // Like et Dislike = faux en etat initial => isLiked et isDisliked = False jusqu'au premier click
    
    const handleLike = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikes(prevLikes => prevLikes-1); // Methode PREV pour avoir accès a l'etat précédent +1 
        } else {
            setIsLiked(true);
            setIsDisliked(false);
            setLikes(prevDislikes => prevDislikes+1);
            if (isDisliked) {
                setDislikes(prevDislikes => prevDislikes-1);
            }
        }
    }

    const handleDislike = () => {
        if(isDisliked) {
            setIsDisliked(false);
            setDislikes(prevDislikes => prevDislikes-1);
        } else {
            setIsDisliked(true);
            setIsLiked(false);
            setDislikes(prevDislikes => prevDislikes+1);
            if (isLiked) {
                setLikes(prevLikes => prevLikes-1);
            }
        }
    }


    return (
        <div className="flex flex-col p-10 pb-5 gap-y-2 bg-cerise text-white rounded-lg shadow-lg">

            <span className="uppercase font-extrabold text-2xl whitespace-nowrap">{movie.title}</span>
            <span>{movie.category}</span>
            <span> {likes} likes</span>
            <span> {dislikes} dislikes</span>

            <div className="grid grid-cols-2 gap-x-4">
                <button 
                className="p-2 bg-framboise  rounded-md hover:bg-bubblegum hover:text-cerise hover:font-semibold shadow-md duration-300" onClick={handleLike}>
                    <span className="flex items-center justify-center"> <img className="h-14" src={ isLiked ? FilledHeartIcon : EmptyHeartIcon}/></span>
                </button>
           
                <button className="p-2 bg-framboise rounded-md  hover:bg-bubblegum hover:text-cerise hover:font-semibold  shadow-md duration-300" onClick={handleDislike}>
                    <span className="flex items-center justify-center"><img className="h-14" src={isDisliked ? FilledDislikeIcon : EmptyDislikeIcon}/></span>
                </button>
            </div>

            <button className="pt-5 font-medium text-cerisenoire hover:text-bubblegum duration-300">Supprimer</button>

        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }).isRequired
  }

export default MovieCard