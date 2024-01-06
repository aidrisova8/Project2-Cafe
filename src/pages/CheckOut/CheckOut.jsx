import styles from "./CheckOut.module.css"
import { useState } from "react";

const CheckOut = () => {

  
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

  function handleChange(e){
setForm({... form, [e.target.id]: e.target.value})
}


function handleSubmit(){

}

// function handleChangeSelect(){
//   setForm({ ...form, state: e.target.value });
// }

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name: </label>
    <input  id="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name"/>

    <label htmlFor="lastName">Last Name: </label>
    <input  id="lastName" value={form.lastName} onChange={handleChange}/>

    <label htmlFor="phone">Phone: </label>
    <input type="number" id="phone" value={form.phone} onChange={handleChange}/>

    <label htmlFor="email">Email: </label>
    <input  id="email" value={form.email} onChange={handleChange}/>

   <label htmlFor="adress">Adress Line: </label>
   <input id="address" value={form.address} onChange={handleChange} />

   <label htmlFor="city">City: </label>
   <input id="city" value={form.city} onChange={handleChange} />

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

   <label htmlFor="zip">Zip Code: </label>
   <input type="number" id="zip" value={form.zip} onChange={handleChange} />

   <label htmlFor="card">Card #: </label>
   <input type="number" id="card" value={form.card} onChange={handleChange} />

   <label htmlFor="cardDate">Exp. Date: </label>
   <input id="cardDate" value={form.cardDate} onChange={handleChange} />

    <button>Submit</button>
</form>
  )
}

export default CheckOut