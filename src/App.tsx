import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import { Container } from '@mui/material'
import Recipe from './screens/recipe/Recipe'

function App() {
  return (
    <Container className='w-full flex items-center justify-between'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
      </Routes>
    </Container>
  )
}

export default App
