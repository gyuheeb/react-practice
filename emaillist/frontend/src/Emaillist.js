import React from 'react';
import styles from './assets/css/Emaillist.css';
import Email from './Email';



const Emaillist = ({emails,callbackDeleteEmail}) => {
    console.log(emails);
    return (
    <ul className={styles.Emaillist}> 

        {
            emails.map(email => <Email key={email.no}
                                           no={email.no}
                                           firstname={email.firstname}
                                           lastname={email.lastname}
                                           email={email.email}
                                           callbackDeleteEmail={callbackDeleteEmail}
                />)
            
        }
        
           
  
             
    </ul>
    );
};

export default Emaillist;