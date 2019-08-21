import React, { Component } from 'react'
// CSS for horizontal list
import { Button, Switch, ButtonGroup, Breakpoints, Row, Column } from 'react-foundation'


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assessments: [
                {
                    name: "extinguisher",
                    installed: false
                },
                {
                    name: "alarms",
                    installed: false
                },
                {
                    name: "detection",
                    installed: false
                },
                {
                    name: "riser",
                    installed: false
                },
                {
                    name: "egress",
                    installed: false
                }
            ],
            riskScore: [],
            riskAssessment: ""
            // risk assessment can be a function of the sum of the values of each item in the state
        }
        this.handleSwitch = this.handleSwitch.bind(this)
    }

    scoreLogic() {
        // code to assess the fire risk level based on the state of the level.
        // loop throught the this.state.assessment object (.map or forEach)
        // .push into this.state.riskScore
        // sum of riskScore
        // if risk score is <33 = Normal/Green
        // if risk score is >34 && <67 = Caution/Yellow
        // if risk score is > 68 = Critial/Red
    }

    // handleClick function that changes the state of the 
    handleSwitch(event) {
        const { assessments } = this.state
        const { name, value } = event.target
        console.log(`VALUE: ${value}`)
        console.log(`Name: ${name}`)
        let targetAssessment = assessments.filter(item => (item.name === event.target.name))

        if (name === targetAssessment[0].name) {
            console.log("HIT")
            this.setState({
                installed: !targetAssessment[0].installed
            })
            console.log(this.state.assessments)
        }

    }

    handleClick() {
        console.log(`submit clicked`)
        // handle Risk Assessment score calculation
        alert("Survey Submitted")
    }

    render() {
        const { assessments } = this.state
        return (
            <div className="container">
                {/* use a button to that changes color upon onclick */}
                {/* use helper function to calculate the risk value (1-100) */}
                <div className="fieldset">
                    <h3>LEVEL {this.props.level}</h3>
                    {/* Use horizontal list buttons  */}
                    {/* conditional rendering for buttons */}

                    <div className="switch-basics-example button-group-stack-example">
                        <ButtonGroup stackFor={Breakpoints.SMALL}>
                            {assessments.map(item => {
                                return (
                                    <div className="grid-basics-example">
                                        <Switch onChange={this.handleSwitch}
                                            key={item.name}
                                            input={{ name: item.name, value: item.installed }}
                                            active={{ text: 'Yes' }}
                                            inactive={{ text: 'No' }}
                                        />
                                        <p> {item.name}</p>
                                    </div>)
                            })}
                        </ButtonGroup>
                    </div>

                    <div className="button-small expanded">
                        <Button isExpanded onClick={this.handleClick}>Submit Survey</Button>
                    </div>

                </div>
            </div >
        )
    }
}


export default List;