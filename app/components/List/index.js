import React, { Component } from 'react';
// CSS for horizontal list
import { Button, Switch, ButtonGroup, Breakpoints, Row, Column } from 'react-foundation';
import API from "../utils/API";
import Status from "../Status";

const assessments = [
    { extinguisher: false },
    { alarms: false },
    { detection: false },
    { riser: false },
    { egress: false }
];

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
            condition: ""
        };
        this.handleSwitch = this.handleSwitch.bind(this);
        this.scoreLogic = this.scoreLogic.bind(this);
        this.conditionAssessment = this.conditionAssessment.bind(this)
        this.submitAssessment = this.submitAssessment.bind(this)
    }

    // componentDidUpdate() {
    //     console.log(`RiskScore ${this.state.riskScore}, condition ${this.state.condition}`)
    //     console.log(this.state)
    // }

    scoreLogic() {
        // sum of riskScore
        const { extinguisher, alarms, detection, riser, egress, riskScore } = this.state

        let score = [0]

        extinguisher ? score.push(10) : null;
        alarms ? score.push(20) : null;
        detection ? score.push(20) : null;
        riser ? score.push(20) : null;
        egress ? score.push(30) : null;

        let sum = score.reduce((a, b) => a + b)

        this.setState({ riskScore: sum },
            () => {
                console.log(riskScore)
                this.conditionAssessment()
            })
    }

    conditionAssessment() {
        const { riskScore, condition } = this.state
        if (riskScore > 67) {
            this.setState({
                condition: "normal"
            }, () => { console.log(condition) })
        }
        if (riskScore > 34 && riskScore < 66) {
            this.setState({
                condition: "caution"
            }, () => { console.log(condition) })
        }
        if (riskScore < 33) {
            this.setState({
                condition: "critical"
            },
                () => { console.log(condition) })
        }
    };

    // submitAssessment function that changes the state of the 
    handleSwitch() {

        const { name } = event.target
        const { extinguisher, alarms, detection, riser, egress } = this.state
        switch (name) {
            case 'extinguisher':
                this.setState({ extinguisher: !extinguisher }, () => { console.log(extinguisher) });
                break;
            case 'alarms':
                this.setState({ alarms: !alarms }, () => { console.log(alarms) })
                break;
            case 'detection':
                this.setState({ detection: !detection }, () => { console.log(detection) })
                break;
            case 'riser':
                this.setState({ riser: !riser }, () => { console.log(riser) })
                break;
            case 'egress':
                this.setState({ egress: !egress }, () => { console.log(egress) })
                break;
        }
    };

    submitAssessment() {
        // calculates the logic based on current state & updates mongoose
        this.scoreLogic()

        API.getUser()

            .then(res => {

                // console.log(res.data)

                API.saveAssessment(

                    this.props.levelId,
                    {
                        extinguishers: this.state.extinguisher,
                        smokeFireDetection: this.state.detection,
                        smokeFireAlarms: this.state.alarms,
                        fireRisers: this.state.riser,
                        emergencyEgress: this.state.egress,
                        riskAssessmentResult: this.state.condition,
                        assessmentDate: new Date(),
                        user: res.data._id

                    })
                    .then(res => {
                        // console.log(res)
                        this.setState({ condition: this.state.condition })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
    };

    render() {
        const { condition } = this.state

        if (condition === "") {

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
                                            <Switch
                                                onChange={this.handleSwitch}
                                                key={propName}
                                                input={{ name: propName, value: propVal }}
                                                active={{ text: 'Yes' }}
                                                inactive={{ text: 'No' }}
                                            />
                                            {/* user property name */}
                                            <p>{propName}</p>
                                        </div>)
                                })}
                            </ButtonGroup>
                        </div>

                        <div className="button-small expanded">
                            <Button isExpanded data-levelid={this.props.levelId} onClick={this.submitAssessment}>Submit Survey</Button>
                        </div>

                    </div>
                </div >
            )
        } else if (condition === "normal" || condition === "caution" || condition === "critical") {
            return (
                <Status
                    level={this.props.level}
                    levelId={this.props.levelId}
                    riskAssessmentResult={condition}
                />
            )

        }

    }
}

export default List;