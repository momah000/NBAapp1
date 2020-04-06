import React, { Component } from 'react';
import './layout.css';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
//layout >>> header>>>
class Layout extends Component{
    state = {
        showNav:false

    }
    
    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }
 
//render layout and its children
    render(){
        return(
            <div>
               <Header //calls header from layout
               user={this.props.user} 
               showNav ={this.state.showNav} //Shows the nav
               onHideNav = {()=>this.toggleSideNav(false)} //changes the state to false
               onOpenNav = {()=>this.toggleSideNav(true)} //changes state to true
               />
            {this.props.children}
            <Footer/>
            </div>
        )
    }
}

export default Layout;