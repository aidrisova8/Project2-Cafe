import { Route,Routes } from 'react-router-dom'
 import Header from "./components/Header/Header"
 import Footer from "./components/Footer/Footer"
 import Home from "./pages/Home/Home"
 import Cart from "./pages/Cart/Cart"
 import Meal from "./pages/Meal/Meal"
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const[categories, setCategories]=useState([]);

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


  
  useEffect(()=>{
    getAttribute();
    
  },[])

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
 <Route path="/" element={<Home categories={categories}  />}/>
 <Route path="/cart" element={<Cart />} /> 
 <Route  path="/meal/:idMeal/:price" element ={<Meal />} />
</Routes>
      <Footer />
    </div>
  )
}

export default App
