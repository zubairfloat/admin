import React, { Component } from "react";
import Donut from "./Donut";
import "./style.css";

class StatsChart extends Component {
    render() {
        return (
            <div className="Chart">
                <Donut />
            </div>
        );
    }
}

export default StatsChart