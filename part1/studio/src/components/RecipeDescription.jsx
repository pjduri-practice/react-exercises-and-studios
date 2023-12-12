import { Component } from "react"
import RecipeAuthor from "./Description"

export default class RecipeDescription extends Component {
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