import './styling.css'

function RecipeImage({ image }) {
  return <img className="recipeImage" src={image} alt="Recipe Image" />
}

export default RecipeImage