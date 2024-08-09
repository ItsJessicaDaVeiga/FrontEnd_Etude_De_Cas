import PropTypes from "prop-types";
import { useState } from "react";
import FilledHeartIcon from "../icons/filledheart.png";
import FilledDislikeIcon from "../icons/filleddislike.png";
import EmptyHeartIcon from "../icons/emptyheart.png";
import EmptyDislikeIcon from "../icons/emptydislike.png";
import Poubelle from "../icons/poubelle.png";

function MovieCard ({movie, onLike, onDislike, onDelete}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);


    const onClickLike = () => {
        setIsLiked(!isLiked);
        onLike(movie.id, !isLiked);
        
        if (isDisliked) {
            onClickDislike();
        }
    }

    const onClickDislike = () => {
        setIsDisliked(!isDisliked);
        onDislike(movie.id, !isDisliked);
        
        if (isLiked) {
            onClickLike();
        }
    }

    const onClickDelete = () => {
        onDelete(movie.id)
    }

    return (
        <div className="flex flex-col p-2 gap-y-2 bg-white text-dark rounded-lg hover:shadow-xl shadow-md">

            <span className="px-3 py-4 uppercase font-extrabold text-2xl whitespace-nowrap border-b border-lavande">{movie.title}</span>

            <div className="p-2 pt-0">
                <div className="flex flex-col pl-2 py-4">
                    <span>{movie.category}</span>
                    <span> <strong>{movie.likes}</strong> likes</span>
                    <span> <strong>{movie.dislikes}</strong> dislikes</span>
                </div>
            </div>

            <div className="grid grid-cols-3 ">
                <button 
                    className="p-1.5 rounded-l-md bg-lavande hover:bg-amber-50 duration-300" 
                    onClick={onClickLike}
                >
                    <span className="flex items-center justify-center "> <img className="h-10" src={isLiked ? FilledHeartIcon : EmptyHeartIcon} alt="Like Icon"/></span>
                </button>
           
                <button 
                    className="p-1.5 bg-lightlavande rounded-r-md hover:bg-amber-100 duration-300" 
                    onClick={onClickDislike}
                >
                    <span className="flex items-center justify-center"><img className="h-10" src={isDisliked ? FilledDislikeIcon : EmptyDislikeIcon} alt="Dislike Icon"/></span>
                </button>
                <button 
                    className="ml-2 p-1.5 bg-graay rounded-md hover:bg-amber-100 duration-300" 
                    onClick={onClickDelete}
                >
                    <span className="flex items-center justify-center"><img className="h-10" src={Poubelle} alt="Dislike Icon"/></span>
                </button>
            </div>
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