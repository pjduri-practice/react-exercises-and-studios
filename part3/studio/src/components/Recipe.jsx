import '../App.css'

const RecipeAuthor = () => {
   let authorLink = 'https://panlasangpinoy.com/about-2/'
   let authorPhoto = 'https://panlasangpinoy.com/wp-content/uploads/2020/03/Vanjo-Merano-Panlasang-Pinoy.jpg'
   let authorName = 'Vanjo Merano'

   return (
      <div>
         <img src={authorPhoto} alt = "Vanjo Merano" style={{objectFit: "contain", borderRadius: "50%"}} className='imageUpdates' />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink} target='_blank'>Panlasang Pinoy</a> 
         </div>
      </div>
   )
}

const RecipeIngredients = () => {
   const ingredients = [
      '2 lbs pork belly',
        '2 tablespoons garlic',
        '5 dry bay leaves',
        '4 tablespoons vinegar',
        '1/2 cup soy sauce',
        '1 tablespoon peppercorn',
        '2 cups water',
        'salt to taste'
   ]
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredients.map(i => <li>{i}</li>)}
         </ul>
      </div>
   )
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Pork Adobo</h1>
            <p>My own personal comfort food, filled with memories of my childhood.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   )
}

const RecipePhoto = () => {
   return (
      <img src='https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg' alt='Yummy Pork Adobo' className='imageUpdates'/>
   )
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   )
}
