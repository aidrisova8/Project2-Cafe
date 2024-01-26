import { useSelector } from "react-redux";
import styles from "./Receipt.module.css"
import { Fragment } from "react";


const Receipt = ({orderDetails}) => {
    const order = useSelector((state) => state.orders.receiptOrder);
    // const customer = useSelector((state) => state.orders.customer);

     console.log(JSON.stringify(order, null, 2));
    let total = 0;
  
    order.forEach((element) => {
      total += Number(element.price) * (element.count|| 0);
    });
  
    return (
      <div className={styles.container}>
        <h1>Order Details</h1>
  
        {order.map((el) => (
          <div key={el.idMeal}>
            <h4>Dish Name: {el.strMeal}</h4>
            <p>Quantity: {el.count || 0}</p>
            <p>Price: {el.price}</p>
          </div>
        ))}
  
        <div className={styles.lowerContainer}>
          <p>First Name: {orderDetails.firstname}</p>
          <p>Last Name: {orderDetails.lastname}</p>
          <p>Phone: {orderDetails.phone}</p>
          <p>Email: {orderDetails.email}</p>
          <p>Address: {customer.addressLine} {customer.city}  {customer.state}  {customer.zip}</p>
        </div>
  
        <b>Total Amount: {new Intl.NumberFormat().format(total)}$</b>
      </div>
    );
  };
  
  export default Receipt;
  