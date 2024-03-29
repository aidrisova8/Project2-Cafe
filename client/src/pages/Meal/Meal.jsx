 import { useParams } from "react-router-dom"
import styles from "./Meal.module.css"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addOrder } from "../../cafeSlice"


const Meal = () => {

  const dispatch=useDispatch();
    let {idMeal,price}=useParams()
const[mealDescription, setMealDescription]=useState([])
    async function getSingleMeal(){
        try {
         const response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
         const data=await response.json();
         console.log(data.meals)   
         setMealDescription(data.meals)
        } catch (error) {
           console.log(error.message) 
        }
    }


    useEffect(()=>{
        getSingleMeal()
    },[])
 
  return (
    <div className={styles.descriptionWrapper}>
      <div className={styles.sectionLeft}>
 <h1>{mealDescription[0]?.strMeal}</h1>

 <h3>Cuisine {mealDescription[0]?.strArea}</h3>
 <p>{mealDescription[0]?.strInstructions}</p>
<b>Price {price}$</b>
 <div className={styles.addToCart}>
              <button onClick={()=>dispatch(addOrder({strMeal:mealDescription[0]?.strMeal,price,idMeal,strMealThumb:mealDescription[0]?.strMealThumb}))}>ADD</button>
            </div>
            </div>
            <div className={styles.sectionRight}>
            <img src={mealDescription[0]?.strMealThumb} />

            </div>
         
  </div>
  )
}

export default Meal