 import styles from "./Order.module.css"

const Order = ({item}) => {
    console.log(item)
  return (
    <div className={styles.item}>
<img src={item.strMealThumb} />
<h2>{item.strMeal}</h2> 
 <b>Price {item.price}$</b>
     </div>
  )
}

export default Order