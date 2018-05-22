import React, { Component } from 'react';
import axios from 'axios';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isloggedin: true
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.get('').then((res) => {
            if (!res.data) {
                return this.setState({ isloggedin: res.data })
            }
        });
    }
    

    render() {
        return this.state.isloggedin ? (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="#"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button></a>
                </nav>
            </div>
        
        ) : (


            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <form className="form-inline my-2 my-lg-0" method="POST" action="#">
                        <input className="form-control mr-sm-2" name="email" type="text" placeholder="E-mail" aria-label="Search" />
                        <input className="form-control mr-sm-2" name="password" type="password" placeholder="Password" aria-label="Search" />
                        <input type="hidden" name="form_source" value="login" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" value="login">Log In</button>
                    </form>
                </nav>
            </div>
        )
    }
}
