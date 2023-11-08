
import { Link } from 'react-router-dom';
import './Navbar.css';
import React,{ Component } from 'react';


export default class Navbar extends Component{
    render(){
    return (
        <div className='container'>
           <div className='navbar'>
                Madhu's Kitchen
                <Link to={"/login"}>
                    <button className='btn'>Login</button>
                </Link>
                <Link to={"/restaurant"}>
                    <button className='btn'>Restaurant</button>
                </Link>
            </div>
        </div>
    );
    }
}

