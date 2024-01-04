 import { useParams } from "react-router-dom"
import styles from "./Meal.module.css"
import { useEffect, useState } from "react"


const Meal = () => {
    let {idMeal,price}=useParams()
const[mealDescription, setMealDescription]=useState({})
    async function getSingleMeal(){
        try {
         const response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
         const data=await response.json();
         console.log(data.meals[0])   
         setMealDescription(data.meals[0])
        } catch (error) {
           console.log(error.message) 
        }
    }


    useEffect(()=>{
        getSingleMeal()
    },[])
  return (
    <div className={styles.descriptionWrapper}>
 <h1>{mealDescription.strMeal}</h1>
 <img src={mealDescription.strMealThumb} />
 <h3>Cuisine {mealDescription.strArea}</h3>
 <p>{mealDescription.strInstructions}</p>
<b>Price {price}$</b>
 <div className={styles.addToCart}>
              <button>ADD</button>
            </div>
         
  </div>
  )
}

export default Meal