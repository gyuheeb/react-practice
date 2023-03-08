import React from 'react';

function Clock(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const htmls=
        "<span>" + ('0'+(hours>12 ? hours - 12 : hours)).slice(-2)+
        ":"+('0'+ minutes).slice(-2) +
        ":" +('0'+ seconds).slice(-2) +
        " "+ (hours > 12? 'PM': 'AM')+
        "</span>";
    
    const o ={
        __html: htmls
    };

    return (
        // HTML 태그를 동적으로 생성하여 JSX Element의 특정 속성(dangerouslySetInnerHTML) 으로 렌더링 하는 작업은 금하고 있다. 하지만,
        // XSS(Cross-Site-scripting) 보호기능을 끄고 사용할 수 있다.
        // -> <div dangerouslySetInnerHTML={__html: htmls} />
        <div dangerouslySetInnerHTML={o} />
    );
}

export default Clock;