import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Join from "./component/user/Join";
import Login from "./component/user/Login";
import Settings from "./component/user/Settings";
import Error404 from "./component/error/Error404";
import Me from "./component/about/Me";
import About from "./component/about";
import Location from "./component/about/Location"
import './assets/scss/App.scss'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Main />}/>
                <Route path={'gallery'} element={<Gallery />}/>
                <Route path={'guestbook'} element={<Guestbook />}/>
                <Route path={'user/join'} element={<Join />}/>
                <Route path={'user/login'} element={<Login />}/>
                <Route path={'user/settings'} element={<Settings />}/>
                <Route path={'about'} element={<About />}/>
                <Route element={<About />}>
                    <Route path={'about/me'} element={<Me />}/>
                    <Route path={'about/location'} element={<Location />}/>
                </Route>


                
                <Route path={"*"} element={<Error404 />}/>
            </Routes>
        </Router>
    );
}