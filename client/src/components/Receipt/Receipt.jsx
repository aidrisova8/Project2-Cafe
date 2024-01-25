import { useSelector } from "react-redux";
import styles from "./Receipt.module.css"
import { Fragment } from "react";


const Receipt = () => {
    const order = useSelector((state) => state.orders.receiptOrder);
    const customer = useSelector((state) => state.orders.customer);

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
          <p>First Name: {customer.firstName}</p>
          <p>Last Name: {customer.lastName}</p>
          <p>Phone: {customer.phone}</p>
          <p>Email: {customer.email}</p>
          <p>Address: {customer.addressLine} {customer.city}  {customer.state}  {customer.zip}</p>
        </div>
  
        <b>Total Amount: {new Intl.NumberFormat().format(total)}$</b>
      </div>
    );
  };
  
  export default Receipt;
  