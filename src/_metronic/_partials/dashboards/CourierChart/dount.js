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
            labels: ["Delivered", "Pending", "Cancelled", "Return", "Dispatch"],
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
        return (
            <div className="Chart">
                <a
                    href="#"
                    className="text-dark-75 text-hover-primary font-weight-bolder font-size-h5"
                >
                    Couriers Graph
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
