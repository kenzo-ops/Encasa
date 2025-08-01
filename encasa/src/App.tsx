import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/landing'
import Navbar from './layout/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar/>
  <Landing/>
  </>
  )
}

export default App
