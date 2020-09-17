import React, { Component } from "react";
import { Dashboard } from "../../_metronic/_partials";
import { connect } from 'react-redux';
import { GetUserGraph, GetStatsGraph } from '../../redux/Actions/user.action'
import { GetShipmentGraph } from '../../redux/Actions/shipment.action'
import { GetCouriersGraph } from '../../redux/Actions/couriers.action'


class DashboardPage extends Component {
  componentDidMount() {
    this.props.getUserGraph()
    this.props.getStatsGraph()
    this.props.getCouriersGraph()
    this.props.getShipmentGraph()

  }
  render() {
    return <Dashboard />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserGraph: () => dispatch(GetUserGraph()),
    getStatsGraph: () => dispatch(GetStatsGraph()),
    getCouriersGraph: () => dispatch(GetCouriersGraph()),
    getShipmentGraph: () => dispatch(GetShipmentGraph())
  }
}

export default connect(null, mapDispatchToProps)(DashboardPage)



