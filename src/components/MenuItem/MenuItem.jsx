import { Link } from "react-router-dom";
import styles from "./MenuItem.module.css";
import { useEffect, useState } from 'react'


const MenuItem = ({category , addOrder}) => {
  const[meals,setMeals]=useState([]);
  

  async function getMeals(){
    
    try {
      const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      const data=await response.json();
    //console.log(data.meals)
    let newMeals=data.meals.slice(0,5).map(item=>{
      const randomPrice=(Math.random()*(30-5+1)+5).toFixed(2)
      return{
        price:randomPrice,
        ...item
      }
    })
      setMeals(newMeals)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
getMeals()
  },[])



  return (
    <div className={styles.mealsContainer}>
     
      {meals.map((meal) => {
       // console.log(meal)
        return (
        
          <div key={meal.idMeal}>
             <Link key={meal.idMeal} to={'/meal/'+meal.idMeal+"/"+meal.price} > 
            <img src={meal.strMealThumb} /> 
            </Link>
            <h5>{meal.strMeal}</h5> 
            <b>Price {meal.price}$</b>
            <div className={styles.addToCart}>
              <button onClick={() => addOrder(meal)}>ADD</button>
            </div>
          </div>
      
        );
      })}
     
    </div>
  )
}

export default MenuItem