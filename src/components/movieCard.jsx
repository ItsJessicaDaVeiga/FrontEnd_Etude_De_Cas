import PropTypes from "prop-types";
import EmptyHeartIcon from "../icons/4.png";
import EmptyDislikeIcon from "../icons/6.png";



function MovieCard ({movie}) {
    return (
        <div className="flex flex-col m-5 p-10 pb-5 space-y-2 bg-cerise text-white rounded-lg shadow-lg">

            <span className="uppercase font-extrabold text-2xl whitespace-nowrap">{movie.title}</span>
            <span>{movie.category}</span>
            <span> {movie.likes} likes</span>
            <span> {movie.dislikes} dislikes</span>

            <div className="grid grid-cols-2 gap-x-4">
                <button className="p-2 bg-framboise rounded-md hover:bg-bubblegum hover:text-cerise hover:font-semibold shadow-md duration-300">
                    <span className="flex-none flex items-center justify-center"><img className="h-14" src={EmptyHeartIcon}/>J'aime</span>
                </button> 
            
                <button className="p-2 bg-framboise rounded-md  hover:bg-bubblegum hover:text-cerise hover:font-semibold  shadow-md duration-300">
                    <span className="flex-none flex items-center justify-center "><img className="h-14" src={EmptyDislikeIcon}/>Je n'aime pas</span>
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