import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () =>{
        const now = new Date();
        const hours = now.getHours();

        return {
            hours: ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2),
            minutes: ('0' + now.getMinutes()).slice(-2),
            seconds: ('0' + now.getSeconds()).slice(-2),
            session: hours > 12 ? 'pm': 'am'
        }
    }
    const [currenttime, setCurrentTime]= useState(getCurrentClockTime());
    const[tick, setTick] = useState(0);

    useEffect(() => {
        const Timer = setInterval(() => {
          setCurrentTime(getCurrentClockTime());
          setTick(t => t+1);
        }, 1000);
        return (() => clearInterval(Timer))
      }, []);
    
    return (
        <div>
           <span>{tick}</span>
            {
                tick % 10 === 0 ?
                null:
            <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={currenttime.hours}
                    minutes={currenttime.minutes}
                    seconds={currenttime.seconds}/>
                 

            }
        </div>  
    );
}