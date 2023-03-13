import React from 'react';
import styles from './assets/css/Emaillist.css';
import Email from './Email';



const Emaillist = ({emails}) => {
    console.log(emails);
    return (
    <ul className={styles.Emaillist}> 

        {
            emails.map(email => <Email key={email.no}
                                           no={email.no}
                                           firstName={email.firstName}
                                           lastName={email.lastName}
                                           email={email.email}
                />)
            
        }
        
           
  
             
    </ul>
    );
};

export default Emaillist;