 import styles from "./Order.module.css"

const Order = ({item}) => {
    console.log(item)
  return (
    <div className={styles.item}>

<h5>{item.strMeal}</h5> 
 <b>Price {item.price}$</b>
     </div>
  )
}

export default Order