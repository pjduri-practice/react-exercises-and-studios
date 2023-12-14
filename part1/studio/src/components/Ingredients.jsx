import styles from './Ingredients.module.css'

export default function RecipeIngredients() {

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

    return (
            <div>
                <h3>Recipe Ingredients</h3>
                <ul className={styles.ingredientList}>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                    <li>{ingredients[5]}</li>
                    <li>{ingredients[6]}</li>
                    <li>{ingredients[7]}</li>
                </ul>
            </div>
    )

}