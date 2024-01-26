import React from 'react'
import styles from "./Login.module.css"

import axios from 'axios'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = { 
    email: '',
    password: ''
}

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post('/auth/login', form)
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
            console.log(userResponse)
            setUser(userResponse.data)
    
            navigate('/profile')

        } catch(err) {
            console.log(err.response.data.error)
            alert(err.response.data.error)
        }
    }

    return (
        <div className={styles.wrapper}> 
        <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Login To My Account</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input
                className={styles.loginInput}
                placeholder='Email'
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={form.email}
            />
            <input
                className={styles.loginInput}
                placeholder='Password'
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={form.password}
            />
            <button className={styles.loginButton}>Login</button>
        </form>
    </div>
    </div>
     );
}


export default Login;