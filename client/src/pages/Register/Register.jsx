import React from 'react'
import styles from "./Register.module.css"

import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = { 
    firstname: '',
    lastname: '',
    password: '',
    email: ''
}

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post('/auth/register', form)
            const token = response.data.token

            console.log(token)

            if (!token) {
                setForm(emptyForm)
                return
            } 

            localStorage.setItem("token", token)

            const userResponse = await axios.get('/api/users', { 
                headers: {
                    Authorization: token
                }
            })

            setUser(userResponse.data)
    
            navigate('/profile')

        } catch(err) {
            console.log(err.response.data.error)
            alert(err.response.data.error)
        }
    }

    return ( 
        <div className={styles.wrapper}> 
        <div className={styles.registerContainer}>
            <h1 className={styles.registerTitle}>Create an Account</h1>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
               
                <label className={styles.registerLabel} htmlFor="email">Email*</label>
                <br />
                <input  className={styles.registerInput}
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <br /><br />
                <label className={styles.registerLabel} htmlFor="firstname">First Name*</label>
                <br />
                <input   className={styles.registerInput}
                    type="text" 
                    id="firstname"
                    name="firstname"
                    onChange={handleChange}
                    value={form.firstname}
                />
                <br /><br />
                <label className={styles.registerLabel} htmlFor="lastname">Last Name*</label>
                <br />
                <input  className={styles.registerInput}
                    type="text" 
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                    value={form.lastname}
                />
                <br /><br />
                <label className={styles.registerLabel} htmlFor="password">Password*</label>
                <br />
                <input  className={styles.registerInput}
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button className={styles.registerButton}>Join</button>
            </form>
            </div>
    </div>
     );
}

export default Register;