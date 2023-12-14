import "./App.css";
import RateARecipe from "./components/RateARecipe"
import Button from "./components/Button"
import AuthorInfo from "./components/AuthorInfo"
import IngredientList from "./components/Ingredients"
import RecipeImage from "./components/RecipeImage"
import RecipeName from "./components/RecipeName"

export default function App() {
  return (
    <>
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={4} />
      <Button saveButton={false} />
      {/* <AuthorInfo /> */}
      <IngredientList />
    </>
  )
}




  //  {
  //    "name": "Pork Adobo",
  //    "author": "Vanjo Merano",
  //    "description": "My own personal comfort food, filled with memories of my childhood.",
  //    "website": "https://panlasangpinoy.com/filipino-food-pork-adobo-recipe/",
  //    "recipeImage": "https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-Recipe.jpg",
  //    "authorImage": "https://panlasangpinoy.com/wp-content/uploads/2020/03/Vanjo-Merano-Panlasang-Pinoy.jpg",
  //    "ingredients": [
  //     "2 lbs pork belly",
  //     "2 tablespoons garlic",
  //     "5 dry bay leaves",
  //     "4 tablespoons vinegar",
  //     "1/2 cup soy sauce",
  //     "1 tablespoon peppercorn",
  //     "2 cups water",
  //     "salt to taste"
  //    ]
  //  }