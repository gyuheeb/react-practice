import React, { useState } from 'react';
import './assets/css/App.css'
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import emaillist from './assets/json/data.json';


const App = () => {
    const [emails, setEmails]= useState(emaillist);

    const notifyKeyWordChanged = function(){
        //keyword가 firstName or lastName or email 
       const newEmail =  emails.filter(function(e){
             newEmail.text.toLowerCase().includes(firstName)
             newEmail.text.toLowerCase().includes(lastName)
             newEmail.text.toLowerCase().includes(emails) 
           
        })

    }
    return (
       <div id ="App" className={'App'}>
            <RegisterForm />
            <Searchbar callback= {notifyKeyWordChanged}/>
            <Emaillist emaillist={emaillist}  />

       </div>
    )
}

export default App;