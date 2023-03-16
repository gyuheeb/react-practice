import React, { useState ,useEffect} from 'react';
import './assets/css/App.css'
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';


const App = () => {
    const [emails, setEmails]= useState([]);
     //keyword가 firstName or lastName or email 

     const fetchEmails = async() =>{
        try{
            const response = await fetch('/api/email',{
                method : 'get',
                headers :{
                    'Accept' : 'application/json'
                }
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)     //error 발생시 다 catch 로 넘겨줌
             }
            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails(json.data)

        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(() =>{
        fetchEmails();
    }, [])

    const addEmail = async(firstname, lastname, email) => {
        const newEmail={
          no: null,
          firstname: firstname,
          lastname: lastname,
          email: email
        };
         try{
           const response = await fetch('/api/email',{
             method: 'post',
             headers: {
                 'Accept' : 'application/json',
                 'Content-Type':"application/json" 
             },
             body :JSON.stringify(newEmail)
         });

         if(!response.ok){
             throw new Error(`${response.status} ${response.statusText}`)     //error 발생시 다 catch 로 넘겨줌
          }
         const json = await response.json();
         //console.log(json);
         if(json.result !== 'success'){
             throw new Error(`${json.result} ${json.message}`);
         }
         setEmails([json.data, ...emails]);

     }catch(err){
         console.log(err.message);
     }};

    const notifyKeyWordChanged = function(keyword){
        const emails = emaillist.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
        setEmails(emails);
    }
    
    const deleteEmail = async(no) =>{
        const newDelete ={
            no:no
        };
        try{
            const response = await fetch(`/delete/${no}`,{
                method : 'delete',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type':"application/json"
                },
                body :JSON.stringify(newTask)
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)     //error 발생시 다 catch 로 넘겨줌
             }
            const json = await response.json();
            //console.log(json);
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails([json.data, ...tasks]);  //data 받아옴
        }catch(err){
            console.log(err.message);

        }
    }

    
    return (
       <div id ="App" className={'App'}>
            <RegisterForm callbackAddEmail={addEmail} />
            <Searchbar callback= {notifyKeyWordChanged}/>
            <Emaillist 
                emails={emails} 
                callbackDeleteEmail={deleteEmail} />

       </div>
    )
}

export default App;