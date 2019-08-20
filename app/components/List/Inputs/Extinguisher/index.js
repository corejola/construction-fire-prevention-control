import React, { Component } from 'react'
// CSS for horizontal list
import { Switch, ButtonGroup, Breakpoints } from 'react-foundation';

class Extinguisher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "extinguisher",
            installed: false
        }
        this.handleSwitch = this.handleSwitch.bind(this)
    }


    // handleClick function that changes the state of the 
    handleSwitch(event) {
        event.preventDefault();
        console.log("switched")
        const { name, value } = event.target

        console.log(`Name: ${name}, Installed: ${value}`)
        if (value === "false") {
            this.setState({
                installed: !this.state.installed
            })
        }
        console.log(`updated state to ${this.state.installed}`)
    }

    render() {
        return (
            <div >
                <div className="switch-basics-example button-group-stack-example">
                    <ButtonGroup stackFor={Breakpoints.SMALL}>
                        <div>
                            <Switch onChange={this.handleSwitch}
                                input={{ name: this.state.name, value: this.state.installed }} active={{ text: 'Yes' }} inactive={{ text: 'No' }} />Extinguishers
                                </div>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}


export default Extinguisher;