import './styling.css'
import recipe from './recipe.json'

function AuthorInfo() {

  const authorImage = <img className='authorImage' src={recipe[0].authorImage} alt={recipe[0].author} key={recipe[0].author} />
  const authorName = <h4 key={recipe[0].author}>{recipe[0].author}</h4>
  const recipeWebsite = <a target='_blank' href={recipe[0].website}>View the full recipe!</a>

   return <div>
    {authorImage}
    {authorName}
    {recipeWebsite}
   </div>
 }
 
 export default AuthorInfo
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 