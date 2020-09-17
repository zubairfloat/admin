import React from "react";
import Chart from "react-apexcharts";
import { connect } from 'react-redux';

class Pie extends React.Component {
    state = {
        options: {
            chart: {
                type: "donut",
                height: 200
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "40%"
                    }
                }
            },
            colors: [
                "#A6386A",
                "#C9A64D",
                "#355DA4",
                "#4D5360",
                "#FF912E",
                "#5F9A6C",
                "#9EFFFF",
                "#EE90BB",
                "#1F6FD0",
                "#1F6FD0",
                "#FFC600"
            ],
            labels: ["Total Users", "Total Couriers", "Total Shipments"],
            legend: {
                position: "bottom",
                onItemClick: {
                    toggleDataSeries: true
                }
            }
        },
        series: [46, 8, 12, 10, 24]
    };

    render() {
        const users = this.props.data.totalUsers || 0
        const couriers = this.props.data.totalCouriers || 0
        const shipments = this.props.data.totalShippments || 0
        const series = [users, couriers, shipments]
        console.log("series is ", series)
        return (
            <div className="Chart">
                <a
                    href="#"
                    className="text-dark-75 text-hover-primary font-weight-bolder font-size-h5"
                >
                    Stats Graph
            </a>
                <Chart
                    options={this.state.options}
                    series={series}
                    type="donut"
                    width="100%"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.user.all
    }
}
export default connect(mapStateToProps, null)(Pie);
