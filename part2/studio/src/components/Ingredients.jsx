function IngredientList({ ingredients }) {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, id) => <li key={id}>{ingredient}</li>)}
      </ul>
    </div>
  )
}

export default IngredientList

//import json file for the data
//use a nested map to get inside the inner array
