import React from 'react';
import styles from './assets/css/Emaillist.css'



const Email = ({no,firstName, lastName, email}) => {
    return (
        
            <li>
            {firstName + lastName}
            
            <span>{email}</span>
            <a href=''></a>
            </li>
        

    );
};

export default Email;