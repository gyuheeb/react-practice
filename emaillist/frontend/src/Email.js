import React ,{useState}from 'react';
import styles from './assets/css/Emaillist.css'



const Email = ({no,firstname, lastname, email, callbackDeleteEmail}) => {
    

    return (
        
            <li>
            {firstname + lastname}
            
            <span>{email}</span>
            <a href={(e)=> {
                e.preventDefault();
                callbackDeleteEmail(e.target.no.value);
            }} ></a>
            </li>
        

    );
};

export default Email;