import React from 'react';


function App() {
  return (
    <div>
     <h2>01</h2>
     <p>JSX Tutorial - 특징1: HTML과 차이점</p>
     {
      /*
      1. 속성은 Camel Case
      */
     }
     <input type='text' maxLength='10' />

     {
      /*
      2. Element는 꼭 닫는다.
      */
     }
     <br />
     <hr />
     <img src =''/>
     {
      /**
       * 3. JSX Element의 속성 이름은 DOMAPI와 일치한다.
       *  <h4 className='heander' id ='title' />
       * document.getElementById('title).className = 'header2';
       * 
       */
     }

    
    </div>
  );
}

export default App;
