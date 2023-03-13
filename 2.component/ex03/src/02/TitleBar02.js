import React, {useState} from 'react';

export default function TitelBar02() {
    const [no, setNo] = useState(0);

    const onClickHandler= function(){
        setNo(no +1);
        console.log(`TitleBaor 02 Clicked: ${stateNo}`);
    }
    
    return (
        <div>
               <h1 onClick={onClickHandler} 
               style={{cursor: 'pointer'}}
               >
                Function Handler<br />
                {no}
            </h1>
        </div>
    )
}