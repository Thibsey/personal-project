import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            email_confirm: "",
            password: "",
            password_confirm: "",
            userdata: null,
            success: false
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitHandler(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", this.state).then(res => {

            if (res.data.errors) {
                return this.setState(res.data);
            }
            return this.setState({
                userdata: res.data,
                errors: null,
                success: true
            })
        });
    }

    render() {
        return (
            <div>
                {this.state.success && <p>You are successfully registerated!</p>}
                <form onSubmit={this.submitHandler}>
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="alert">
                                <span className="glyphicon glyphicon-info-sign"></span>
                            </div>
                        </div>

                        <div className="form-group">
                            {this.state.errors &&
                                this.state.errors.firstName && (
                                    <p>{this.state.errors.firstName.msg}</p>
                                )}
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    placeholder="First Name"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            {this.state.errors &&
                                this.state.errors.lastName && (
                                    <p>{ this.state.errors.lastName.msg }</p>
                                )}
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    className="form-control" 
                                    placeholder="Last Name"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            {this.state.errors &&
                                this.state.errors.email && (
                                    <p>{this.state.errors.email.msg}</p>
                                )}
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></span>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder=" Email"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            {this.state.errors &&
                                this.state.errors.email_confirm && (
                                    <p>{this.state.errors.email_confirm.msg}</p>
                                )}
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></span>
                                <input 
                                    type="email" 
                                    name="email_confirm" 
                                    className="form-control" 
                                    placeholder=" Email"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            {this.state.errors &&
                                this.state.errors.password && (
                                    <p>{ this.state.errors.password.msg }</p>
                                )}
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Enter Password"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            {this.state.errors &&
                                this.state.errors.password_confirm && (
                                    <p>{ this.state.errors.password_confirm.msg }</p>
                                )}
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                                <input 
                                    type="password" 
                                    name="password_confirm" 
                                    className="form-control" 
                                    placeholder="Enter Password"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            <hr />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btn btn-outline-success my-2 my-sm-0" 
                                value="Register"
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
