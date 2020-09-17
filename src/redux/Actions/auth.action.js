import * as types from '../Types/auth.types'

export function login(login) {
    return {
        type: types.LOGIN_REQUEST,
        payload: login
    };
}
export function logout() {
    return {
        type: types.LOGOUT_REQUEST,
    };
}