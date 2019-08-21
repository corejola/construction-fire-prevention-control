import React from 'react'
// CSS for horizontal list
import { Switch, ButtonGroup, Breakpoints } from 'react-foundation'

function Input(props) {

    return (
        <div className="switch-basics-example button-group-stack-example">
            <ButtonGroup stackFor={Breakpoints.SMALL}>
                <div>
                    <Switch
                        input={{ name: props.name, value: props.installed }}
                        active={{ text: 'Yes' }} inactive={{ text: 'No' }} />
                </div>
                <p>{props.name}</p>
            </ButtonGroup>
        </div>
    )
}


export default Input