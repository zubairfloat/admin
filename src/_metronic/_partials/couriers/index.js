import React, { Component } from 'react'
import CouriersTable from './table'

class Sender extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xxl-12 order-2 order-xxl-1">
                    <CouriersTable className="card-stretch gutter-b" />
                </div>
            </div>

        )
    }
}

export default Sender
