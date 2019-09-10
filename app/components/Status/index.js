import React, { Component } from "react";
import { Colors, Link, Grid, Cell } from 'react-foundation';

const normal = "NORMAL";
const caution = "CAUTION";
const critical = "CRITICAL!"

function Status(props) {
    return (
        <Grid className="display">

            {/* use a button to that changes color upon onclick */}
            {/* use helper function to calculate the risk value (1-100) */}
            <Cell>
                <div className="fieldset">
                    <h3>LEVEL {props.level}</h3>
                    {/* Use horizontal list buttons  */}
                    {/* conditional rendering for buttons */}

                    <Link isExpanded color={props.riskAssessmentResult === "normal" ? Colors.SUCCESS
                        : props.riskAssessmentResult === "caution" ? Colors.WARNING
                            : Colors.ALERT}>{props.riskAssessmentResult === "normal" ? normal
                                : props.riskAssessmentResult === "caution" ? caution
                                    : critical}</Link>

                </div>
            </Cell>

        </Grid>

    )

}

export default Status;