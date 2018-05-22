import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <form >
                    <div className="form-group">
                        <label ><h1>Message Wall</h1></label>
                        <br />
                            <input type="hidden" name="form_source" value="message" />
                                <textarea name="message" className="form-contol" id="exampleFormControlTextArea1" rows="5" placeholder="Message"></textarea>
                    
                    </div>
                        <input type="hidden" name="user_id" value="<?= $user['id'] ?>" />
                        <input type="submit" className="btn btn-outline-success my-2 my-sm-0" value="Post Message" />
                </form>
            </div>
        )
    }
}
