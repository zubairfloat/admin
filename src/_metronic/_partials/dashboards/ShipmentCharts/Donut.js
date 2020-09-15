import React from "react";
import Chart from "react-apexcharts";

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
            labels: ["Shipment Complete", "Shipment Pending", "Shipment Cancelled"],
            legend: {
                position: "bottom",
                onItemClick: {
                    toggleDataSeries: true
                }
            }
        },
        series: [45, 33, 14]
    };

    render() {
        return (
            <div className="Chart">
                <a
                    href="#"
                    className="text-dark-75 text-hover-primary font-weight-bolder font-size-h5"
                >
                    Shipment Graph
            </a>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="donut"
                    width="100%"
                />
            </div>
        );
    }
}

export default Pie;
