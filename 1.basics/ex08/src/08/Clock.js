import React from 'react';

function Clock(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    
    return (
        /**
         *  Comment01 : JSX 밖은 JavaScript 구분(주석 구문)이 가능하다.
         */
        <div 
            /**
             * comment02 : 이 위치에서도 주석이 가능하다. : 비추천
             */
        className='clock' title='시계'> 
            {/**
             *  comment03 : 이런 방식으로 표현식에 실행되는 블록안에서 주석을 달아야 한다. : 추천
             */}
             {/**
              *  comment04 : JSX는 HTML이 아니다
              *  <!-- --> HTML 주석은 사용할 수 없다.
              */
                
             }
            {('0'+(hours>12 ? hours - 12 : hours)).slice(-2)}
            {':'}
            // comment05 : JSX안에서 Java 주석 구문을 사용하면 그대로 나온다.
            {('0'+ minutes).slice(-2)}
            {':'}
            {('0'+ seconds).slice(-2)} 
            {' '}
            {hours > 12? 'PM': 'AM'}
        </div>
    );
}

export default Clock;