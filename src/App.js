import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/index/index';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Index}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
