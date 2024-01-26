import React from 'react'
import styles from "./Profile.module.css"

function Profile({ user}) {
    return ( 
        <div>
            <h1>Personal Details</h1>
            <p>Email: {user.email}</p>
            <p>First Name: {user.firstname}</p>
            <p>Last Name: {user.lastname}</p>
        </div>
        
     );
}

export default Profile;