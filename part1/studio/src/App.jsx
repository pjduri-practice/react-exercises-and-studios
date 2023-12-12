import './App.css'
import RecipeIngredients from './components/Ingredients'
import RecipeDescription from './components/Description'

function App() {

  return (
    <>
      <div className='App'>
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </>
  )
}

export default App
