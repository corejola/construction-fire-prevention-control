import React, { Component } from 'react'
// CSS for horizontal list
import { Button, Switch, ButtonGroup, Breakpoints, Callout } from 'react-foundation'

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
        extinguisher ? score.push(10) : null;
        alarms ? score.push(20) : null;
        detection ? score.push(20) : null;
        riser ? score.push(40) : null;
        egress ? score.push(50) : null;

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
        const { riskScore } = this.state
        //  Conditional rendering
        // if risk score is <33 = Normal/Green
        // if risk score is >34 && <67 = Caution/Yellow
        // if risk score is > 68 = Critial/Red
        // handle Risk Assessment score calculation
        this.scoreLogic()
        console.log(riskScore)
        if (riskScore < 33) {
            // Render a Green/Normal
            {
                <div className="callout-basics-example">
                    <Callout>
                        <h5> Normal.</h5>
                        <p>It has an easy to override visual style, and is appropriately subdued.</p>
                        <a>It's dangerous to go alone, take this.</a>
                    </Callout>
                </div>
            }
        }
        if (riskScore > 34 && riskScore < 66) {
            // Render a Yellow/Caution
        }
        if (riskScore > 67) {
            // Render a Red/Critial
        }

        alert("Survey Submitted")
    }

    renderPage() {

    }

    render() {
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