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
        const { tower, levels } = this.state
        return (
            <div className="container">
                {/* .map over fake data */}
                {/* Use list  */}
                <h2>{tower} Risk Assessment</h2>
                {levels.map(item => {
                    return (
                        <List
                            key={item.id}
                            tower={item.tower}
                            level={item.level}
                        />)
                })}
            </div>
        )
    };
};


export default Assessment;