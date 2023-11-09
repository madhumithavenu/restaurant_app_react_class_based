import { Component } from "react";
import './Login.css';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        let user = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        let backend_url = "http://localhost:3200/login";
        let options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }
        try{
        fetch(backend_url, options)
        .then((response)=>response.json())
        .then((responseData)=>{
            if (responseData.flag === true) {
                window.location.href='/restaurant';
            } else {
                this.setState({errorMessage: responseData.msg})
            }
        }).catch(err=>{
            console.error("Error",err)
        })
    }catch(err){
        console.error("Error",err)
    }
     
    }
    render(){
        return(
            <div className="pri">
            <div className="content">
                <h1>Login Component</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="wrapper">
                        <label htmlFor="username"><b>Username:</b></label>
                        <input type="text" name="username" id="username" required /> <br />

                        <label htmlFor="password"><b>Password: </b></label>
                        <input type="password" name="password" id="password" /> <br />

                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}