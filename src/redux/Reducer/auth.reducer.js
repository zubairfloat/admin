import * as types from '../Types/auth.types';

const initState = {
    isAuthenticated: false,
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            state = {
                ...state,
                isAuthenticated: true
            };
            break;
        case types.LOGOUT_REQUEST:
            state = {
                ...state,
                isAuthenticated: false
            };
            break;
        default:
            return state;
    }
    return state;
};

export default authReducer;
