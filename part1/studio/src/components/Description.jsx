import styles from './Description.module.css'
import React from 'react'

const RecipeAuthor = () => {
    const authorLink = 'https://panlasangpinoy.com/about-2/'
    const authorPhoto = 
        'https://panlasangpinoy.com/wp-content/uploads/2020/03/Vanjo-Merano-Panlasang-Pinoy.jpg'
    const authorName = 'Vanjo Merano'

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src = {authorPhoto} alt='Vanjo Merano' className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Panlasang Pinoy</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Pork Adobo</h1>
                    <p>My own personal comfort food, filled with memories of my childhood.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription