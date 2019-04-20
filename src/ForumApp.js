import React from 'react';
import s from './ForumApp.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Topics from './components/content/topics/Topics';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import state from "./redux/state.js";
import Login from "./components/content/login/Login.js";

const ForumApp = (props) => {
    return (
        <BrowserRouter>
            <div className={s.appMain}>
                <Header/>
                <Navbar/>
                <div className={s.appContent}>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path='/profile'
                           render={() => <Profile state={state.users}/>}/>
                    <Route path='/topics'
                           render={() => <Topics state={state}
                                                 addTopic={props.addTopic}
                                                 updateTopicTitle={props.updateTopicTitle}
                                                 updateFirstMessageText={props.updateFirstMessageText}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default ForumApp;
