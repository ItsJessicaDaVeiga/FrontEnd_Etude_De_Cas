import PropTypes from "prop-types";
import EmptyHeartIcon from "../icons/4.png";
import EmptyDislikeIcon from "../icons/6.png";
import { useState } from "react";
import FilledHeartIcon from "../icons/3.png";
import FilledDislikeIcon from "../icons/7.png";



function MovieCard ({movie, onLike, onDislike, onDelete}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);


    const onClickLike = () => {
        setIsLiked(!isLiked);
        onLike(movie.id);
    }

    const onClickDislike = () => {
        setIsDisliked(!isDisliked);
        onDislike(movie.id);
    }

    const onClickDelete = () => {
        onDelete(movie.id)
    }


    return (
        <div className="flex flex-col p-10 pb-5 gap-y-2 bg-cerise text-white rounded-lg shadow-lg">

            <span className="uppercase font-extrabold text-2xl whitespace-nowrap">{movie.title}</span>
            <span>{movie.category}</span>
            <span> {movie.likes} likes</span>
            <span> {movie.dislikes} dislikes</span>

            <div className="grid grid-cols-2 gap-x-4">
                <button 
                className="p-2 bg-framboise  rounded-md hover:bg-bubblegum hover:text-cerise hover:font-semibold shadow-md duration-300" onClick={onClickLike}>
                    <span className="flex items-center justify-center"> <img className="h-14" src={ isLiked ? FilledHeartIcon : EmptyHeartIcon} alt="Like Icon"/></span>
                </button>
           
                <button className="p-2 bg-framboise rounded-md  hover:bg-bubblegum hover:text-cerise hover:font-semibold  shadow-md duration-300" onClick={onClickDislike}>
                    <span className="flex items-center justify-center"><img className="h-14" src={isDisliked ? FilledDislikeIcon : EmptyDislikeIcon} alt="Dislike Icon"/></span>
                </button>
            </div>

            <button className="pt-5 font-medium text-cerisenoire hover:text-bubblegum duration-300" onClick={onClickDelete}>Supprimer</button>

        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }).isRequired,
    onLike: PropTypes.func.isRequired,
    onDislike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }

export default MovieCard