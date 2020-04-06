import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';
//collects input from layout  
//layout>>header>>
const Header = (props) =>{

    const navBars = () => (
        <div className = 'bars'>
            <FontAwesome name = 'bars'
                onClick={props.OpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )
//the () turns the code into jsx
    const logo = () => (<Link to = "/" className = "logo">
            <img alt = "nba logo" src="/images/nba_logo.png"></img>

        </Link>
        )
    

//header returns the functions 
//for the side bars, passing whatever props its receiving from the header
    return (
        <header className ="header">
            <SideNav {...props}/> 
            <div className ="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;