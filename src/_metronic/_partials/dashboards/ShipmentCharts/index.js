import React, { Component } from "react";
import Donut from "./Donut";
import "./style.css";

class ShipmentChart extends Component {
    render() {
        return (
            <div className="Chart">
                <Donut />
            </div>
        );
    }
}

export default ShipmentChart