import * as types from '../Types/shipment.types';

const initState = {
    graph: []
};
const shipmentReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_SHIPMENT_GRAPH_SUCCESS:
            state = {
                ...state,
                graph: action.payload
            };
            break;
        default:
            return state;
    }
    return state;
};

export default shipmentReducer;
