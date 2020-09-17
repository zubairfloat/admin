import * as types from '../Types/user.types';

const initState = {
    user: [],
    all: []
};
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_USER_GRAPH_SUCCESS:
            state = {
                ...state,
                user: action.payload
            };
            break;
        case types.GET_STATS_GRAPH_SUCCESS:
            state = {
                ...state,
                all: action.payload
            };
            break;
        default:
            return state;
    }
    return state;
};

export default userReducer;
