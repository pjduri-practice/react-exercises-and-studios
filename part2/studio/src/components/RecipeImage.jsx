import './styling.css'
import recipe from './recipe.json'

function RecipeImage() {
   return <img className="recipeImage" src={recipe[0].recipeImage} alt="Recipe Image" />
 }
 
 export default RecipeImage