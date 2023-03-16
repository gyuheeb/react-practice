import React ,{useState} from 'react';
import styles from './assets/css/Searchbar.css'


const Searchbar = ({callback}) => {
    return (
        <div className={styles.Searchbar}> 
            <input type='text' placeholder='찾기' onChange={e => {
                    e.preventDefault();
                    callback(e.target.value)
            }}/>
        </div>
    );
};
export default Searchbar
;