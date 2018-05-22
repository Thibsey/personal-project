import React, { Component } from 'react';
import Post from './post';
import Messages from './messages';


export default class Wall extends Component {
    render() {
        return (
            <div>
                <Post />
                <Messages />
            </div>
        )
    }
}
