import recipe from './recipe.json'

function RecipeName() {
  return <h1>{recipe[0].name}</h1>
}

export default RecipeName