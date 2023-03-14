import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const[tick, setTick] = useState(new Date());

    useEffect(() => {
        const Timer = setInterval(() => {
          const time = new Date();
          setTick(new Date())
        }, 1000);
        return (() => clearInterval(id))
      }, []);
    
    return (
        <div>
           
            {
                tick.getSeconds() % 10 === 0 ?
                null:
            <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={tick.getHours()}
                    minutes={tick.getMinutes()}
                    seconds={tick.getSeconds()}/>
                 

            }
        </div>  
    );
}