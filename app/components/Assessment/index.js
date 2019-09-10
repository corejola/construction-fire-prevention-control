import React, { Component } from 'react';
import List from '../List';
// import TowerLevels from './TowerLevels.json';
import API from "../utils/API"
// import Nav from "../children/Nav"
import { Link } from 'react-router-dom';
import './assessment.css';

class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tower: "TOWER 1",
            // levels: TowerLevels
            levels: []
        }

        this.loadLevels = this.loadLevels.bind(this);
    };

    componentDidMount() {
        this.loadLevels();
    };

    loadLevels() {

        API.getTowers()
            .then(res => {
                this.setState({ levels: res.data[0].levels },
                    () => { })
            })
            .catch(err => console.log(err))
    };

    render() {
        const { tower, levels } = this.state
        return (

            <div className="container">
                {/* <Nav /> */}
                {/* add a navbar */}
                <div className="link">
                    <Link to="/" className="button">HOME</Link>
                </div>
                {/* .map over fake data */}
                {/* Use list  */}
                <h2 className="tower">{tower} Risk Assessment</h2>
                {levels.map(item => {
                    return (
                        <List
                            key={item._id}
                            // tower={item.tower}
                            level={item.levelNumber}
                            levelId={item._id}
                        />)
                })}
            </div>
        )
    };
};


export default Assessment;