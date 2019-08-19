import React, { Component } from 'react'
import List from "../List"

class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // handleClick function that changes the state of the 

    render() {
        return (
            <div className="container">
                {/* use a button to that changes color upon onclick */}
                {/* use helper function to calculate the risk value (1-100) */}
                <List />
                {/* Use list  */}
            </div>
        )
    }
}


export default Assessment