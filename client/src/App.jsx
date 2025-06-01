import { useState } from 'react'
import Navbar from './components/navbar'
import Body from './components/Body'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Body />
    <Footer />
    
    </>
  )
}

export default App
