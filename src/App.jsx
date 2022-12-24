import { useState } from 'react'

import Todo from './UI/Todo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
      <main>
      <Todo/>
      </main> 
      <Footer/>
    </>
  )
}

export default App
