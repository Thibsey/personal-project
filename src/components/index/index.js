import React, { Component } from 'react';
import axios from 'axios'
import Navbar from '../nav/navbar';
import Register from './register';
import Wall from './wall';


class Index extends Component {

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
                <Navbar />
                <Wall />

            </div>
        ) : (
            <div>
                <Navbar />
                <Register />
            </div>
        )
    }
}

export default Index;
