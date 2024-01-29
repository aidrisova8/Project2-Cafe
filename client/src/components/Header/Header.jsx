import  styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import Order from "../Order/Order";
import { clearCart, clearReceipt } from "../../cafeSlice";
import { useDispatch } from 'react-redux';
 
const Header = ({ username, setUser }) => {
  // const orderReceipt = useSelector((state) => state.orders.receiptOrder);
  const dispatch = useDispatch();
   const logout = () => {
      localStorage.removeItem("token")
      setUser({})
    // dispatch(clearReceipt())
    };
   const order  = useSelector((state) => state.orders.orders)
   const orderCount=useSelector((state)=>state.orders.orderCount)
console.log(orderCount)
   console.log(order)

   let[cartOpen, setCartOpen]=useState(false);

   let total = 0;
   let totalCount = 0;
 
   order.forEach((element) => {
     totalCount += orderCount[element.idMeal] || 0;
     total += (Number(element.price) * (orderCount[element.idMeal] || 0));
     
   });

   async function handleClick(){
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to log in before checking out.");
      return;
    }
    setCartOpen(false)
   }

   const showOrders = () => {
      return (
        <>
          {order.map((item) => (
            <Order key={item.idMeal} item={item} count={orderCount[item.idMeal]} />
          ))}
          <p className={styles.total}>Total: {new Intl.NumberFormat().format(total)}$</p>
          <Link  to="/checkout" > <button className={styles.checkout} onClick={handleClick}>
           
  CHECKOUT

</button></Link>
        </>
      );
    };
    

    const showNothing=(()=>{
      return(
         <div className={styles.empty}>
            <h2>Your cart is empty</h2>
         </div>
      )
    })
  return (
     <>
     <header className={styles.header}>
        <div>
            <span className={styles.logo}>Harmony Café and Spa</span>
        </div>
        <ul className={styles.nav}>
        <Link to='/'><li>  Menu </li> </Link>
{username ? 
        <>
          <li style={{ color: "black" }}>Welcome {username}!</li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li onClick={logout}>
            <Link to="/login">Logout</Link>
          </li>
        </>
       : 
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
        </>
      }
        </ul>
      
        <FaShoppingBag onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`${styles.cartButton} ${cartOpen ? styles.active : ''}`} />
{cartOpen && (
   <div className={styles.cart}>
      {order.length>0 ? showOrders() : showNothing()} 
 
 
   </div>
)}

       
        <div className={styles.banner}> </div>
     </header>
     </>
  )
}

export default Header