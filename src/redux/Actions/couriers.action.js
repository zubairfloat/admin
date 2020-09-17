import * as types from '../Types/courier.types'

export function GetCouriersGraph(data) {
    return {
        type: types.GET_COURIER_GRAPH_REQUEST
    };
}