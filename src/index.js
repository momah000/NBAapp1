import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // import the routes

import { firebase } from './firebase';
import Routes from './routes.js'; //import routes

const App = (props) =>{ //app is created in the index.js
    return (
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    )
}
firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})