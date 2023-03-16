import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});


    // back 누르면 주소와 동일하게 변경
    useEffect(() =>{
        const handlePopState = e => {
            setRoute(e.state)
        }  //handleLinkClick page: url 하면 h1도 back url과 동일하게 돌아감
        window.addEventListener('popstate', handlePopState);

        return () =>{
            window.addEventListener('popstate', handlePopState);
        }
    }),[];

    const handleLinkClick = (e) => {
        e.preventDefault();
        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        console.log(url);
        window.history.pushState({page: url}, e.target.text, url); //back 했을 때  page: url을 넣어야 뒤로가기 해도 나옴
        setRoute({page: url}) //페이지 바뀌지 x 변경됨  -> <div>안 라우터 넣기
    }


    return (
        <div>{
                (() => {
                    switch (route.page) {
                        case '/':
                            return <Main/>;
                        case '/gallery':
                            return <Gallery/>;
                        case '/guestbook':
                            return <Guestbook/>;
                        default:
                            return null;
                    }
                })()
            }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}