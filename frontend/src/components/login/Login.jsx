import { Component } from "react";
import './Login.css';

export default class Login extends Component {
    handleSubmit(event) {
        event.preventDefault();
       
    }
    render(){
        return(
            <div>
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
        )
    }
}