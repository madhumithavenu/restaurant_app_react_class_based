
import { Link } from 'react-router-dom';
import './Navbar.css';
import React,{ Component } from 'react';


export default class Navbar extends Component{
    render(){
    return (
        <div className='container'>
           <div className='navbar'>
                Madhu's Kitchen  
                <span className='booting'>
                <Link to={"/login"}>
                    Login
                </Link>
                <Link to={"/restaurant"}>
                    Restaurant
                </Link>
            </span>
            </div>
        </div>
    );
    }
}

