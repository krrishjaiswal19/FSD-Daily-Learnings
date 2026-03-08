
import './App.css'

import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Nav/>
    <outlet/>
    <Footer/>
    </>
  )
}

export default App
