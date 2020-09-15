import React, { Component } from "react";
import Donut from "./dount";
import "./style.css";

class CourierChart extends Component {
    render() {
        return (
            <div className="Chart">
                <Donut />
            </div>
        );
    }
}

export default CourierChart