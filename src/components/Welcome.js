// need to include 2 imports if we need to create class component
import React, { Component } from 'react'

/*
    Functional vs Class Components
    
    Functional:
    - Simple Functions
    - Use Func components as much as possible
    - Absence of 'this' keyword
    - Solution without using state
    - Mainly responsible for the UI
    - Stateless/ Dumb/ Presentational

    Class Components:
    - More feature rich
    - Maintain their own private data - state
    - Complex UI logic
    - Provide lifecycle hooks
    - Stateful/ Smart/ Container
*/

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} with hobby {this.props.hobby}</h1> // JSX
    }
}

export default Welcome