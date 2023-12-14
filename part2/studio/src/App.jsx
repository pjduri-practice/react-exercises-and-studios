import "./App.css";
import RateARecipe from "./components/RateARecipe"
import Button from "./components/Button"
import AuthorInfo from "./components/AuthorInfo"
import IngredientList from "./components/Ingredients"
import RecipeImage from "./components/RecipeImage"
import RecipeName from "./components/RecipeName"
import recipes from './components/recipe.json'

export default function App() {
  return (
    <>
      {recipes.map(r =>
        <>
          <RecipeImage image={r.recipeImage} />
          <RecipeName recipeName={r.name} />
          <RateARecipe rating={4} />
          <Button saveButton={false} />
          <AuthorInfo 
            author={r.author}
            image={r.authorImage} 
            website={r.website}
            />
          <IngredientList ingredients={r.ingredients} />
        </>
      )}
    </>
  )
}
