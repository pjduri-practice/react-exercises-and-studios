import { useState } from 'react'
import './App.css'
import HobbyIntroduction from './components/Introduction'
import { MyProjects } from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HobbyIntroduction />
      <MyProjects />
    </>
  )
}

export default App
