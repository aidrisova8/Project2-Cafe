import  styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import Order from "../Order/Order";
const Header = () => {
   const order  = useSelector((state) => state.orders.orders)
   console.log(order)
   let[cartOpen, setCartOpen]=useState(false);
  return (
     <>
     <header className={styles.header}>
        <div>
            <span className={styles.logo}>Harmony Café and Spa</span>
        </div>
        <Link to='/'>
        <div>Menu</div>
        </Link>
        <FaShoppingBag onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`${styles.cartButton} ${cartOpen ? styles.active : ''}`} />
{cartOpen && (
   <div className={styles.cart}>
      {order.length>0 ? showOrders()} 
{/* {order.map(item => (
    
   <Order key={item.idMeal} item={item} />
  
))} */}
   </div>
)}

       
        <div className={styles.banner}> </div>
     </header>
     </>
  )
}

export default Header