import styles from "./Order.module.css";
import { decreaseOrder, increaseOrder,deleteOrder } from "../../cafeSlice";
import { useDispatch } from 'react-redux';
import { FaTrash } from "react-icons/fa";

const Order = ({ item, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <img src={item.strMealThumb} alt={item.strMeal} />
      <h2>{item.strMeal}</h2> 
      <b>Price {item.price}$</b>
      <h4>Quantity: {count}</h4>
      <button className={styles.increase} onClick={() => dispatch(increaseOrder({ idMeal: item.idMeal }))}>+</button> 
      <button className={styles.decrease} onClick={() => dispatch(decreaseOrder({ idMeal: item.idMeal }))}>-</button>
      <FaTrash className={styles.deleteIcon} onClick={()=>dispatch(deleteOrder( { idMeal: item.idMeal }))} />
    </div>
  );
}

export default Order;
