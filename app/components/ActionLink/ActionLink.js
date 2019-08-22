import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ActionLink extends Component {
    render() {
        return (
            <div>
                <Link
                            color={Colors.SUCCESS}
                            to="/assessment"
                            className="btn btn-link"
                            role="button">
                            TOWER 1
                        </Link>
                
            </div>
        )
    }
}

