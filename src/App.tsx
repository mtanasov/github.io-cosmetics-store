import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/header/Header'
import Header from './components/header/Header'
import Slider_fullscreen from "./components/content/Slider_fullscreen"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Slider_fullscreen />
    </div>
  )
}

export default App
