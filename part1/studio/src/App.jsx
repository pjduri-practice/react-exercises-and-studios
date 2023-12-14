import './App.css'
import RecipeIngredients from './components/Ingredients'
import RecipeDescription from './components/Description'
import RecipePhoto from './components/Photos'

function App() {

  return (
    <>
      <div className='App'>
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </>
  )
}

export default App
