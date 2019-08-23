import React, { Component } from 'react'
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
            condition: "",
            status: "open"
        };
        this.handleSwitch = this.handleSwitch.bind(this);
        this.scoreLogic = this.scoreLogic.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate() {
        console.log(this.state.riskScore)
        console.log(this.state.condition)
    }

    scoreLogic() {
        console.log("hit")
        // sum of riskScore
        const { extinguisher, alarms, detection, riser, egress } = this.state

        let score = []

        extinguisher ? score.push(10) : score.push(0);
        alarms ? score.push(20) : score.push(0);
        detection ? score.push(20) : score.push(0);
        riser ? score.push(20) : score.push(0);
        egress ? score.push(30) : score.push(0);

        let sum = score.reduce((a, b) => a + b)

        this.setState({
            riskScore: sum
        })

        console.log(sum)
    }

    // handleClick function that changes the state of the 
    handleSwitch() {
        const { name } = event.target
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
        this.scoreLogic()
        // code to assess the fire risk level based on the state of the level.
        const { riskScore } = this.state
        console.log(riskScore)

        if (riskScore > 67) {
            this.setState({
                condition: "Normal"
            })
        }
        else if (riskScore > 34 && riskScore < 66) {
            this.setState({
                condition: "Caution"
            })
        }
        else if (riskScore < 33) {
            this.setState({
                condition: "Critical"
            })
        }
    }

    assessmentCard() {
        // store JSX for the switches
    }

    // renderPage() {
    //     if (this.state.view === "open") {
    //         return this.assessmentCard
    //     } else if (this.state.view === "complete") {
    //         return this.resultCard
    //     }
    // }

    render() {
        return (
            <div className="container">
                {/* use a button to that changes color upon onclick */}
                {/* use helper function to calculate the risk value (1-100) */}
                <div className="fieldset">
                    <h3>LEVEL {this.props.level}</h3>
                    {/* Use horizontal list buttons  */}
                    {/* conditional rendering for buttons */}
                    <div>
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
                </div>
            </div >
        )
    }
}


export default List;