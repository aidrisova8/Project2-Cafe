import React from 'react'
import styles from "./Profile.module.css"

function Profile({ user}) {
    return ( 
       <div className={styles.profileWrapper}>
        <div className={styles.profileContainer}>
            <h1>Personal Details</h1>
            <p>Email: {user.email}</p>
            <p>First Name: {user.firstname}</p>
            <p>Last Name: {user.lastname}</p>
        </div>
        </div>
        
     );
}

export default Profile;