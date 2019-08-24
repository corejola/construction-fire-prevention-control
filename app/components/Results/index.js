import React from "react";
import * as d3 from "d3";
import "./style.css"
import database from "../../data/database.json"


//---------- CONVERT DATASET ----------//
const dataset = [];
for (var score in database) {
    dataset.push(database[score].score)
    console.log(database[score].score)
};

//---------- FLOOR NUMBERS ----------//
const floors = [];
for (var floor in database) {
    floors.push(database[floor].level)
};

console.log(dataset.length)
const bw = 400;
const bh = 555;
// const padding = 10;

//---------- BAR CHART VARIABLES ----------//

const pw = 400;
const ph = 400;
const margin = 40;
const radius = Math.min(pw, ph) / 2 - margin;


//---------- PIE CHART VARIABLES ----------//
let data = [];

let red = 0;
let yellow = 0;
let green = 0;


for (let i = 0; i < dataset.length; i++) {
    if (dataset[i] >= 67) {
        red++
    }
    else if (dataset[i] >= 34 && dataset[i] < 66) {
        yellow++

    }
    else if (dataset[i] < 33) {
        green++
    }

}
data.push(red);
data.push(yellow);
data.push(green);


const styles = {
    holder: {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "padding": "0 100px 0 100px"
    },
    data: {
        "position": "absolute",
        "right": "80px",
        "zIndex": "1",
        "margin": "1px",
        "borderColor": "gray",
        "borderStyle": "outset",
        "width": "200px",
        "padding": "5px"

    },
    labels: {
        "fontSize": "10px"
    },

    visHolder: {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "space-around"
    },
}

const small = {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "space-evenly",
    "padding": "0 100px 0 100px"
};


class Tower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            width: window.innerWidth,
        };
        this.handleClick = this.handleClick.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        //---------- BAR CHART ----------//

        const svg = d3.select(".my-barGraph")
            .append("svg")
            .attr("width", bw)
            .attr("height", bh)
            .attr("class", "holder");

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", 100)
            .attr("y", (d, i) => bh - ((i + 1) * 10))
            // .attr("y", (d, i) => bh - ((i + 1) * 30))
            .attr("class", "barG")
            .attr("width", 215)
            .attr("height", 7)
            .attr("fill", (d) => {
                if (d < 33) {
                    return "#7D8F29"
                }
                else if (d >= 34 && d < 66) {
                    return "#FDCA44"
                }
                else if (d >= 67) {
                    return "#AA0830"
                }
            })
            .on("mouseenter", function (d) {
                d3.select(this)
                    .attr("stroke", "black")
                    .transition()
                    .duration(10)
                    .attr("stroke-width", 6);
            })
            .on("mouseleave", function (d) {
                d3.select(this).transition()
                    .attr("stroke", "none");
            })
            .append("svg:title")
            .text((d, i) => ("Floor score " + d))


        svg.selectAll("text")
            .data(floors)
            .enter()
            .append("text")
            .text((d, i) => ("FLOOR " + d))
            .attr("x", 0)
            .attr("y", (d, i) => (bh - ((i + 1) * 10)) + 7)
            .attr("class", "labels");

        //---------- PIE CHART ----------//

        const color = d3.scaleOrdinal()
            // .domain([red, yellow, green])
            .range(["#AA0830", "#FDCA44", "#7D8F29"]);

        const pieC = d3.select(".pie-chart")
            .append("svg")
            .attr("width", pw)
            .attr("height", ph)
            .append("g")
            .attr("transform", "translate(" + pw / 2 + "," + ph / 2 + ")");

        const pie = d3.pie()
            .value((d) => { return d.value })

        const data_ready = pie(d3.entries(data))


        //---------- PIE CHART BUILD----------//

        pieC.selectAll('pieSpace')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(0)
                .outerRadius(radius))
            .attr('fill', function (d) { return (color(d.data.key)) })
            .attr("stroke", "gray")
            .style("stroke-width", "1px")
            .style("opcity", 0.7)
            .on("mouseenter", function (d) {
                d3.select(this)
                    .attr("stroke", "black")
                    .transition()
                    .duration(10)
                    .attr("d", d3.arc().outerRadius(radius + 10).innerRadius(0))
                    .attr("stroke-width", 6);
            })
            .on("mouseleave", function (d) {
                d3.select(this).transition()
                    .attr("d", d3.arc().outerRadius(radius).innerRadius(0))
                    .attr("stroke", "none");
            });
    };

    handleClick() {

        if (this.state.display === false) {
            this.setState({ display: true })
        }
        else {
            this.setState({ display: false });
        }
    };

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    };

    render() {

        // // const redFloors = database.filter(user => user.online); // change code here
        // const redFloors = database.map((i) => <li key={i.username + 1}>{i.username}</li>); // change code here

        if (this.state.display) {
            return (
                <div>
                    <div style={styles.holder}>
                        <h1>Tower Readiness Results</h1>

                        <p className="description"><strong>ABOUT THE VISUALIZATIONS: </strong>The following visualization aggregates the tower's evaluation data. After evaluating the current state of each floor, calculations are conducted on the back-end to determine if a floor is in a good or normal safety status, <strong>green</strong>, a caution safety status, <strong>yellow</strong>,or a critical  status, <strong>red</strong>. Hover over each floor to see the final score. Notice if certain floors continue to evaluate to a severe safety rating. <br /> <br />              Reference the pie chart below to see the percentage of floors that are in each category: normal, caution, critical.</p>
                        <button onClick={this.handleClick}>More Details</button>

                    </div >

                    <div className="vis-holder" style={this.state.width < 1000 ? small : styles.visHolder}>
                        <h4>TOWER 1 RESULTS</h4>
                        <h4>PERCENTAGE OF RESULTS</h4>
                    </div>

                    {/* <div className="data-labels" style={styles.data}> */}
                    <div className="data-labels" style={this.state.width < 1000 ? styles.holder : styles.data}>

                        <p id="green">{`NORMAL: ${parseInt(green / dataset.length * 100)} %`}</p>
                        <p id="yellow">{`CAUTION: ${parseInt(yellow / dataset.length * 100)} %`}</p>
                        <p id="red">{`CRITICAL: ${parseInt(red / dataset.length * 100)} %`}</p>

                    </div>

                    <div className="vis-holder" style={this.state.width < 1000 ? small : styles.visHolder}>

                        <div className="my-barGraph"></div>
                        <div className="pie-chart"></div>

                    </div>
                </div >
            );
        }
        else {
            return (
                <div>
                    <div style={styles.holder}>
                        <h1>Tower Readiness Results</h1>

                        <p className="description"><strong>FLOORS IN CRITICAL CONDITION:</strong><br /><br />
                            {`Total Floors:  ${red}`}
                        </p>
                        <button onClick={this.handleClick}>Show Graph Descriptions</button>

                    </div >

                    <div className="vis-holder" style={this.state.width < 1000 ? small : styles.visHolder}>
                        <h4>TOWER 1 RESULTS</h4>
                        <h4>PERCENTAGE OF RESULTS</h4>
                    </div>

                    {/* <div className="data-labels" style={styles.data}> */}
                    <div className="data-labels" style={this.state.width < 1000 ? styles.holder : styles.data}>

                        <p id="green">{`NORMAL: ${parseInt(green / dataset.length * 100)} %`}</p>
                        <p id="yellow">{`CAUTION: ${parseInt(yellow / dataset.length * 100)} %`}</p>
                        <p id="red">{`CRITICAL: ${parseInt(red / dataset.length * 100)} %`}</p>

                    </div>

                    <div className="vis-holder" style={this.state.width < 1000 ? small : styles.visHolder}>

                        <div className="my-barGraph"></div>
                        <div className="pie-chart"></div>

                    </div>

                </div >


            );
        }
    };

};

export default Tower;

