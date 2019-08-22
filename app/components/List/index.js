import React, { Component } from 'react'
// CSS for horizontal list
import { Button, Switch, ButtonGroup, Breakpoints } from 'react-foundation'

const assessments = [
    { extinguisher: false },
    { alarms: false },
    { detection: false },
    { riser: false },
    { egress: false }
]

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extinguisher: false,
            alarms: false,
            detection: false,
            riser: false,
            egress: false,
            riskScore: 0,
            riskAssessment: ""
            // risk assessment can be a function of the sum of the values of each item in the state
        };
        this.handleSwitch = this.handleSwitch.bind(this);
        this.scoreLogic = this.scoreLogic.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    scoreLogic() {
        // code to assess the fire risk level based on the state of the level.
        // loop throught the this.state.assessment object (.map or forEach)
        // .push into this.state.riskScore
        // sum of riskScore
        // if risk score is <33 = Normal/Green
        // if risk score is >34 && <67 = Caution/Yellow
        // if risk score is > 68 = Critial/Red
        const { extinguisher, alarms, detection, riser, egress } = this.state
        console.log(this.state)
        let score = []
        if (extinguisher === true) {
            return score.push(10)
        }
        if (alarms === true) {
            return score.push(20)
        }
        if (detection === true) {
            return score.push(20)
        }
        if (riser === true) {
            return score.push(40)
        }
        if (egress === true) {
            return score.push(50)
        }
        this.setState({
            riskScore: score.reduce((a, b) => a + b)
        })
    }

    // handleClick function that changes the state of the 
    handleSwitch() {
        const { name } = event.target
        console.log(`Name: ${name}`)

        switch (name) {
            case 'extinguisher':
                this.setState({ extinguisher: !this.state.extinguisher })
                break;
            case 'alarms':
                this.setState({ alarms: !this.state.alarms })
                break;
            case 'detection':
                this.setState({ detection: !this.state.detection })
                break;
            case 'riser':
                this.setState({ riser: !this.state.riser })
                break;
            case 'egress':
                this.setState({ egress: !this.state.egress })
                break;
        }
    }

    handleClick() {
        console.log(`submit clicked`)
        // handle Risk Assessment score calculation
        this.scoreLogic()
        console.log(this.state.riskScore)
        alert("Survey Submitted")
    }

    render() {
        // const { assessments } = this.state

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
                            {assessments.map((item) => {
                                let propName = Object.keys(item)
                                let propVal = Object.values(item)
                                return (
                                    <div className="grid-basics-example">
                                        <Switch onChange={this.handleSwitch}
                                            key={propName}
                                            input={{ name: propName, value: propVal }}
                                            active={{ text: 'Yes' }}
                                            inactive={{ text: 'No' }}
                                        />
                                        {/* user property name */}
                                        <p> {propName}</p>
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