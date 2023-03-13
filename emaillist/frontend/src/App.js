import React, { useState } from 'react';
import './assets/css/App.css'
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import emaillist from './assets/json/data.json';


const App = () => {
    const [emails, setEmails]= useState(emaillist);
     //keyword가 firstName or lastName or email 
    const notifyKeyWordChanged = function(keyword){
        const emails = emaillist.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
        setEmails(emails);
    }

    
    return (
       <div id ="App" className={'App'}>
            <RegisterForm />
            <Searchbar callback= {notifyKeyWordChanged}/>
            <Emaillist emails={emails}  />

       </div>
    )
}

export default App;