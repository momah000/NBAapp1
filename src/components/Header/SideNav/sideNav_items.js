import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import { firebase } from '../../../firebase';


import FontAwesome from 'react-fontawesome';
import './sideNav.css';


const SideNavItems = (props) =>{
    const items =  [{
        type: 'option',
        icon: 'home',
        text: 'Home',
        link: '/',
        login: ''
    },
    {
        type: 'option',
        icon: 'file-text-o',
        text: 'News',
        link: '/news',
        login: ''
    },
    {
        type: 'option',
        icon: 'play',
        text: 'Videos',
        link: '/videos',
        login: ''
    },
    {
        type: 'option',
        icon: 'sign-in',
        text: 'Dashboard',
        link: '/dashboard',
        login: false
    },
    {
        type: 'option',
        icon: 'sign-in',
        text: 'Sign in',
        link: '/sign-in',
        login: true
    },
    {
        type: 'option',
        icon: 'sign-out',
        text: 'Sign out',
        link: '/sign-out',
        login: false
    }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
    )
    const restricted = (item,i) => {
        let template = null;

        if( props.user === null && item.login ){
            template = element(item,i)
        }

        if(props.user !== null && !item.login){
            if(item.link === '/sign-out'){
                template = (
                    <div key={i} 
                        className={item.type}
                        onClick={()=>{
                            firebase.auth().signOut()
                            .then(()=>{
                                props.history.push("/")
                            })
                        }}
                        >
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </div>
                )

            } else {
                template = element(item,i)
            }
        }

        return template;
    }

//instead of making multiple functions, create array of objects 
    
/**const showItems = () => {
        return items.map( (item,i) =>{
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        } )
    }**/

    const showItems = () => {
        return items.map( (item,i) =>{
            return item.login !== '' ?
                restricted(item,i)
            :
                element(item,i)
        } )
    }






    return (
        <div>
            {showItems()}
        </div>

    )
}

export default withRouter(SideNavItems);