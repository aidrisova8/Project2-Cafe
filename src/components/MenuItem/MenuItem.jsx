import styles from "./MenuItem.module.css";

const MenuItem = ({meals}) => {
  return (
    <div className={styles.mealsContainer}>
      {meals.map((meal) => {
        console.log(meal)
        return (
          <div key={meal.idMeal}>
            {<h3>{meal.strMeal}</h3> }
          </div>
        );
      })}
    </div>
  )
}

export default MenuItem