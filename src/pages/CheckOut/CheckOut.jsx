import styles from "./CheckOut.module.css"
import { useState } from "react";
import Receipt from "../../components/Receipt/Receipt"
import { useDispatch } from 'react-redux';
import { addCustomer, clearCart } from "../../cafeSlice";

const CheckOut = () => {

  const dispatch = useDispatch();

  let[form,setForm]=useState({
    firstName:'', 
    lastName:'',
    phone:'',
    email:'',
    address:'',
    city:'',
    zip:'',
    card:'',
    cardDate:'',
    state:'',
  })
console.log(form)
  function handleChange(e){
setForm({... form, [e.target.id]: e.target.value})
}


function handleSubmit(e){
  e.preventDefault();
let customer={
  firstName:form.firstName, 
  lastName:form.lastName,
  phone:form.phone,
  email:form.email,
  address:form.address,
  city:form.city,
  zip:form.zip,
  card:form.card,
  cardDate:form.cardDate,
  state:form.state
}

setForm({
  firstName:'', 
  lastName:'',
  phone:'',
  email:'',
  address:'',
  city:'',
  zip:'',
  card:'',
  cardDate:'',
  state:''
})
dispatch(addCustomer(customer));
dispatch(clearCart())
}

 

  return (
    <>
    <div>
      <Receipt />
    </div>
    <form onSubmit={handleSubmit}>
     
    <input  id="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name"/>

    <input  id="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name"/>

    <input  id="phone" value={form.phone} onChange={handleChange} placeholder="Phone"/>

    <input  id="email" value={form.email} onChange={handleChange} placeholder="Email"/>

   <input id="address" value={form.address} onChange={handleChange} placeholder="Adress Line" />

   <input id="city" value={form.city} onChange={handleChange} placeholder="City"/>

   <select id="state" value={form.state} onChange={handleChange}>

   <option value="" selected disabled hidden>Choose state</option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select>

   <input  id="zip" value={form.zip} onChange={handleChange} placeholder="Zip Code" />

   <input id="card" value={form.card} onChange={handleChange} placeholder="Card #" />

   <input id="cardDate" value={form.cardDate} onChange={handleChange} placeholder="Exp. Date:" />

    <button>Submit</button>
</form>
</>
  )
}

export default CheckOut