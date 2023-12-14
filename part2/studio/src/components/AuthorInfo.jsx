import './styling.css'

function AuthorInfo({ author, image, website }) {

  const authorImage = <img className='authorImage' src={image} alt={author} key={author} />
  const authorName = <h4 key={author}>{author}</h4>
  const recipeWebsite = <a target='_blank' href={website}>View the full recipe!</a>

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
 