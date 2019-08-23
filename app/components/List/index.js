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
            riskAssessment: ""
            // risk assessment can be a function of the sum of the values of each item in the state
        }
        this.handleSwitch = this.handleSwitch.bind(this)
        this.submitAssessment = this.submitAssessment.bind(this)
    }

    componentDidUpdate() {
        console.log(this.state)
    };

    scoreLogic() {
        // code to assess the fire risk level based on the state of the level.
        // loop throught the this.state.assessment object (.map or forEach)
        // .push into this.state.riskScore
        // sum of riskScore
        // if risk score is <33 = Normal/Green
        // if risk score is >34 && <67 = Caution/Yellow
        // if risk score is > 68 = Critial/Red
        const { extinguisher, alarms, detection, riser, egress } = this.state
        let score = []
        if (extinguisher === true) { }
        if (alarms === true) { }
        if (detection === true) { }
        if (riser === true) { }
        if (egress === true) {

        }
    };

    // submitAssessment function that changes the state of the 
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
    };

    submitAssessment() {

        API.getUser()

            .then(res => {

                console.log(res.data)

                API.saveAssessment(

                    this.props.levelId,
                    {
                        extinguishers: this.state.extinguisher,
                        smokeFireDetection: this.state.detection,
                        smokeFireAlarms: this.state.alarms,
                        fireRisers: this.state.riser,
                        emergencyEgress: this.state.egress,
                        riskAssessmentResult: this.state.riskAssessment,
                        assessmentDate: new Date(),
                        user: res.data._id

                    })
                    .then(res => {
                        console.log(res)
                        this.setState({ riskAssessment: "critical" })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
    };

    render() {
        const { riskAssessment } = this.state

        if (riskAssessment === "") {

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

        } else if (riskAssessment === "normal" || riskAssessment === "caution" || riskAssessment === "critical") {
            return (
                <Status
                    level={this.props.level}
                    levelId={this.props.levelId}
                    riskAssessmentResult={riskAssessment}
                />
            )

        }

    }
}

export default List;