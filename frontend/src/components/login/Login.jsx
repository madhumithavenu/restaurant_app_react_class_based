import { Component } from "react";

export default class Login extends Component {
    render(){
        return(
            <div>
                <h1>Login Component</h1>
                <form onSubmit={null}>
                    <div className="wrapper">
                        
                        Username: <input type="text" name="username" id="username" required /> <br />

                        
                        Password: <input type="password" name="password" id="password" /> <br />

                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}