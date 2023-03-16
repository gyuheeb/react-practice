import React from 'react';
import styles from './assets/css/Emaillist.css'



const Email = ({no,firstname, lastname, email, callbackDeleteEmail}) => {
    

    return (
        
            <li>
            {firstname + lastname}
            
            <span>{email}</span>
            <a href='#' onclick={(e) => {
                            e.preventDefault();
                            callbackDeleteEmail(no);
          }}></a>
            </li>
        

    );
};

export default Email;