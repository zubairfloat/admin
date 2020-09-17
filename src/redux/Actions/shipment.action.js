import * as types from '../Types/shipment.types'

export function GetShipmentGraph(data) {
    return {
        type: types.GET_SHIPMENT_GRAPH_REQUEST
    };
}