import React, { Component } from 'react';
import axios from 'axios';
import Register from './register';
import Wall from './wall';


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorEmail: null,
            errorPass: null,
            error: null,
            isloggedin: true
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/isloggedin").then(res => {
            if (!res.data) {
                return this.setState({ isloggedin: res.data });
            }
        });
    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/loginuser", this.state).then(res => {
            this.setState({
                errorEmail: null,
                errorPass: null,
                error: null
            });
            if (res.data.errors) {
                return this.setState({
                    errorEmail: res.data.errors.email.msg,
                    errorPass: res.data.errors.password.msg,
                    error: res.data.errors
                });
            }
            axios.get("http://localhost:8000/api/isloggedin").then(res => {
                if (!res.data) {
                    return this.setState({ isloggedin: res.data });
                }
            });
            // return (window.location.href = "/");
        });
    }


    
    
    render() {
        return this.state.isloggedin ? (

            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="#"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button></a>
                </nav>
                <Wall />

            </div>
        ) : (
            <div>
                <nav className="navbar navbar-dark bg-dark">

                    <form className="form-inline my-2 my-lg-0" onSubmit={this.submitHandler}>

                        <input
                            className="form-control mr-sm-2"
                            name="email"
                            onChange={this.changeHandler}
                            type="text"
                            placeholder="E-mail"
                            aria-label="Search"
                        />

                        <input
                            className="form-control mr-sm-2"
                            name="password"
                            onChange={this.changeHandler}
                            type="password"
                            placeholder="Password"
                            aria-label="Search"
                        />

                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            value="login"
                        >Log In
                        </button>
                    </form>
                    {this.state.error && <p style={{ color: 'red' }} >{this.state.error}</p>}
                    {this.state.errorEmail && <p style={{ color: 'red' }} >{this.state.errorEmail}</p>}
                    {this.state.errorPass && <p style={{ color: 'red' }} >{this.state.errorPass}</p>}
                </nav>
                <Register />
            </div>
        )
    }
}

export default Index;
