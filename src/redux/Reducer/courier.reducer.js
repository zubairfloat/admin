import * as types from '../Types/courier.types';

const initState = {
    graph: []
};
const courierReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_COURIER_GRAPH_SUCCESS:
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

export default courierReducer;
