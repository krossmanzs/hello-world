import React, { Component } from "react";

/*
    State
    - State is managed within the component
    - Variables declared in the function body
    - state can be changed
    - useState Hook - Functional Components
        this.state - Class components
*/

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message