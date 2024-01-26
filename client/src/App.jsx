import { Route,Routes } from 'react-router-dom'
 import Header from "./components/Header/Header"
 import Footer from "./components/Footer/Footer"
 import Home from "./pages/Home/Home"
 import Cart from "./pages/Cart/Cart"
 import Meal from "./pages/Meal/Meal"
 import Register from "./pages/Register/Register"
 import Login from "./pages/Login/Login"
 import Profile from "./pages/Profile/Profile"
import './App.css'
import { useEffect, useState } from 'react'
import CheckOut from './pages/CheckOut/CheckOut'


function App() {
  const[categories, setCategories]=useState([]);
  


  async function getAttribute(){
    try {
      const response=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      const data=await response.json();
 // console.log(data.meals)
    const filteredCategories = data.meals.filter(category => category.strCategory != "Goat" && category.strCategory != "Miscellaneous"&& category.strCategory != "Lamb");
    setCategories(filteredCategories);
    } catch (error) {
      console.log(error.message)
    }
  }

  // useEffect(()=>{
  //   getAttribute();
    
  // },[])
  const [user, setUser] = useState({})
  async function getUser(token) {
    try {
        const response = await axios.get('/api/users', {
            headers: {
                Authorization: token
            }
        })

        setUser(response.data)
    } catch (error) {
        console.log(error)
        localStorage.removeItem('token')
    }
}

useEffect(() => {
  getAttribute();

    const token = localStorage.getItem('token')
    if (token) {
        getUser(token)
    } 
}, [])

 

  return (
    <div className='wrapper'>
      <Header username={user.firstname} setUser={setUser} />
      <Routes>
 <Route path="/" element={<Home categories={categories}   />}/>
 <Route path="/cart" element={<Cart />} /> 
 <Route  path="/meal/:idMeal/:price" element ={<Meal />} />
 <Route path="/checkout" element={<CheckOut />} /> 
 <Route path="/register" element={<Register setUser={setUser}/>} />
  <Route path="/login" element={<Login setUser={setUser}/>} />
  <Route path="/profile" element={<Profile user={user}/>} />
</Routes>
      <Footer />
    </div>
  )
}

export default App
