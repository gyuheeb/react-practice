import React, { useState } from 'react';
import './assets/css/App.css'
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import emaillist from './assets/json/data.json';


const App = () => {
    const [emails, setEmails]= useState(data);
    const notifyKeyWordChanged = function(){
        //keyword가 firstName or lastName or email 
       const newEmail =  emails.filter(function(e){
            return firstName
        })

    }
    return (
       <div id ="App" className={'App'}>
            <RegisterForm />
            <Searchbar />
            <Emaillist emaillist={emaillist} />

       </div>
    )
}

export default App;