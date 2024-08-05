import PropTypes from "prop-types";


function MovieCard ({movie}) {
    return (
        <div className="flex flex-col m-5 p-10 pb-5 rounded-lg bg-cerise text-white shadow-lg space-y-2 relative">

            <span className="uppercase font-extrabold text-2xl">{movie.title}</span>
            <span>{movie.category}</span>
            <span> {movie.likes} likes</span>
            <span> {movie.dislikes} dislikes</span>

            <div className="grid grid-cols-2 gap-x-4">
                <button className="p-2 bg-framboise rounded-md hover:bg-bubblegum hover:text-cerise hover:font-semibold shadow-md duration-300">J'aime</button>
                <button className="p-2 bg-framboise rounded-md  hover:bg-bubblegum hover:text-cerise hover:font-semibold  shadow-md duration-300">Je n'aime pas</button>
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