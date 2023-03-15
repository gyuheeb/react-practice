import React ,{useState}from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';


const Card = ({no, title, description}) => {
    const[showDetail, setShowDetail] =useState(false);
    const[tasks,setTasks] = useState([]);
    
    const addTask = async(taskName) =>{
        console.log(taskName);
    } //통신하는 놈
    return (
        <div className={styles.Card} >
        <div className={
            showDetail ? 
            [styles.Card__Title, styles.Card__Title_open].join(' ') :
            styles.Card__Title
            }
            onClick= {async () => {
                //통신조건
                if(!showDetail){ //showdetail이 false일 때,
                    try{
                        const response = await fetch(`/api/task?cardNo=${no}`,{
                            method : 'get',
                            headers : {
                                'Accept' : 'application/json'
                            }
                        }); 
            
                        if(!response.ok){
                            throw new Error(`${response.status} ${response.statusText}`)     //error 발생시 다 catch 로 넘겨줌
                         }
                        const json = await response.json();
                        //console.log(json);
                        if(json.result !== 'success'){
                            throw new Error(`${json.result} ${json.message}`);
                        }
                        setTasks(json.data);  //data 받아옴
            
                    }catch(err){
                        console.log(err.message);
                    }
                   
                }
                setShowDetail(!showDetail)  //descroption...
                }}>
                {title}
            </div>
        {
            showDetail ?
            <div className={styles.Card__Details}>
                 {description}
            <TaskList
                 cardNo={no}
                 tasks={tasks}
                 callbackAddTask={addTask}/>
            </div>
            : null
        }
     </div>
    );
};

export default Card;
