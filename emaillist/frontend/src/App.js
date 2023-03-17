import React, { useState ,useEffect} from 'react';
import './assets/css/App.css'
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';


const App = () => {
    const [emails, setEmails]= useState([]);
     //keyword가 firstName or lastName or email 

     const fetchEmails = async() =>{    //List 출력
        try{
            const response = await fetch('/api/email',{
                method : 'get',     //get 방식
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
             throw new Error(`${response.status} ${response.statusText}`)     
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

    
    const deleteEmail = async(no) =>{       //delete
        try{
            const response = await fetch(`/api/delete/${no}`,{
                method : 'delete',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type':"application/json"
                },
                
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)    
             }
            const json = await response.json();
            //console.log(json);
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            const newEmails = emails.filter((email) => email.no !== no);  //no가 아닌 걸 newEmails에 넣어..
            setEmails(newEmails);
            
        }catch(err){
            console.log(err.message);

        }
    }

    const findkeyword = async(keyword) =>{       //keyword 검색
    
        try{
            const response = await fetch(`/api/email/${keyword}`,{
                method : 'get',
                headers :{
                    'Accept' : 'application/json'
                }
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)    
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

    
    return (
       <div id ="App" className={'App'}>
            <RegisterForm callbackAddEmail={addEmail} />
            <Searchbar callback= {findkeyword}/>
            <Emaillist 
                emails={emails} 
                callbackDeleteEmail={deleteEmail} />

       </div>
    )
}

export default App;