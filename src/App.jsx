import React from 'react'
import Home from './pages/Home'
import Details from './pages/Details'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './pages/CategoryAll'
import SearchCard from './component/SearchCard'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
     <Route path="/category-all/:name" element={<CategoryPage />} />
    <Route path="/category/:name" element={<SearchCard/>} />




    </Routes>
  )
}

export default App
