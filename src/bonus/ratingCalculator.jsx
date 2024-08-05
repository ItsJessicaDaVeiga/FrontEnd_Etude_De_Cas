function calculateRating (likes, dislikes) {
    if (likes + dislikes === 0) return 0;
    return (Math.floor(likes/(likes + dislikes) * 5)); 
}

export default calculateRating