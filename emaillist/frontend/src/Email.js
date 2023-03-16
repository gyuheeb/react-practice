import React from 'react';
import styles from './assets/css/Emaillist.css'



const Email = ({no,firstname, lastname, email, callbackDeleteEmail}) => {
    

    return (
        
            <li>
            {firstname + lastname}
            
            <span>{email}</span>
            <a href='#' className={styles.Emaillist__}></a>
            </li>
        

    );
};

export default Email;