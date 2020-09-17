import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from 'react-redux'

const ApexCharts = window.ApexCharts;

class UserChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    data: [
                        [new Date("2019-03-02").getTime(), 2],
                        [new Date("2019-04-02").getTime(), 3],
                        [new Date("2019-05-02").getTime(), 8],
                        [new Date("2019-06-02").getTime(), 21]
                    ]
                }
            ],
            options: {
                chart: {
                    id: "line-chart",
                    type: "line",
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false,
                        autoSelected: "selection"
                    },
                    selection: {
                        enabled: true,
                        type: "x",
                        fill: {
                            color: "#24292e",
                            opacity: 0.1
                        },
                        stroke: {
                            width: 1,
                            dashArray: 3,
                            color: "#24292e",
                            opacity: 0.4
                        },
                        xaxis: {
                            min: new Date("2019-04-02").getTime(),
                            max: new Date("2019-05-02").getTime()
                        },
                        yaxis: {
                            min: undefined,
                            max: undefined
                        }
                    }
                },
                xaxis: {
                    type: "datetime"
                }
            }
        };
    }
    render() {
        return (
            <div className="app">
                <div className="col percentage-chart">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.user.user

    }
}
export default connect(mapStateToProps, null)(UserChart);