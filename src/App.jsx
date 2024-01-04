import { Route,Routes } from 'react-router-dom'
 import Header from "./components/Header/Header"
 import Footer from "./components/Footer/Footer"
 import Home from "./pages/Home/Home"
 import Menu from "./pages/Menu/Menu"
 import Cart from "./pages/Cart/Cart"
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const[categories, setCategories]=useState([]);
  const[meals,setMeals]=useState([]);
  async function getAttribute(){
    try {
      const response=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      const data=await response.json();
    //  console.log(data.meals)
      setCategories(data.meals)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function getMeals(category){
    try {
      const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      const data=await response.json();
     //console.log(data)
      setMeals(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  useEffect(()=>{
    getAttribute();
    categories.map(category=>{
      getMeals(category.strCategory)
    })
    
  },[])

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
 <Route path="/" element={<Home categories={categories} meals={meals} />}/>
 <Route path="/menu" element={<Menu />} /> 
 <Route path="/cart" element={<Cart />} /> 
</Routes>
      <Footer />
    </div>
  )
}

export default App
