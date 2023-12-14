let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"]

const GiveRating = ({ rating }) => <h3>{rating >=1 && rating <= 5 ? stars[rating - 1] : null}</h3>

function RateARecipe({ rating }) {
  return <GiveRating rating={rating}/>
}

export default RateARecipe

//conditional to render stars based on a number provided in App.js 
