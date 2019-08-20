import React, { Component } from 'react';
import List from '../List';
import TowerLevels from './TowerLevels.json';


class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tower: "TOWER 1",
            levels: TowerLevels
        }
    };

    // handleClick function that changes the state of the 

    render() {
        return (
            <div className="container">
                {/* .map over fake data */}
                <h2>{this.state.tower} Risk Assessment</h2>
                {this.state.levels.map(item => {
                    return (
                        <List
                            key={item.id}
                            tower={item.tower}
                            level={item.level}
                        />)
                })}
                {/* Use list  */}
            </div>
        )
    };
};


export default Assessment;