import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <form method="POST" action="process.php">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="alert">
                                <span className="glyphicon glyphicon-info-sign"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                                <input type="text" name="first_name" className="form-control" placeholder="First Name" />
                            </div>
                            <span className="text-danger"></span>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                                <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></span>
                                <input type="email" name="email" className="form-control" placeholder=" Email" />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                                <input type="password" name="pass" className="form-control" placeholder="Enter Password" />
                            </div>
                            <span className="text-danger"></span>
                        </div>

                        <div className="form-group">
                            <hr />
                        </div>

                        <div className="form-group">
                            <input type="hidden" name="form_source" value="registration" />
                            <input type="submit" className="btn btn-outline-success my-2 my-sm-0" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
