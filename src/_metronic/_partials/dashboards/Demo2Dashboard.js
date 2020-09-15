import React, { Component } from "react";
import {
    MixedWidget1,
    StatsWidget11,
} from "../widgets";
import ShipmentChart from './ShipmentCharts'
import CourierChart from './CourierChart'
import UserChart from './UserCharts'

export class Demo2Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipmentToggle: false,
            userToggle: true,
            courierToggle: false
        }
    }
    toggleShipment = () => {
        this.setState({
            shipmentToggle: true,
            userToggle: false,
            courierToggle: false
        })
    }
    toggleUser = () => {
        this.setState({
            shipmentToggle: false,
            userToggle: true,
            courierToggle: false
        })
    }
    toggleCourier = () => {
        this.setState({
            shipmentToggle: false,
            userToggle: false,
            courierToggle: true
        })
    }
    render() {
        return <>
            <div className="row">
                <div className="col-lg-6 col-xxl-4">
                    <MixedWidget1 displayShipemt={this.toggleShipment} displayUser={this.toggleUser} displayCourier={this.toggleCourier} className="card-stretch gutter-b" />
                </div>
                {this.state.userToggle ? <div className="col-lg-6 col-xxl-8">
                    <UserChart className="card-stretch gutter-b" />
                </div> : <></>}

                {this.state.shipmentToggle ? <div className="col-lg-6 col-xxl-6">
                    <ShipmentChart className="card-stretch card-stretch-half gutter-b" />

                </div> : <></>}
                {this.state.courierToggle ? <div className="col-lg-6 col-xxl-6">
                    <CourierChart className="card-stretch card-stretch-half gutter-b" />
                </div> : <></>}

            </div>
        </>;
    }
}
