import * as types from '../Types/auth.types';
import { takeLatest, call, put } from 'redux-saga/effects';

function* loginSaga(action) {
    const Email = 'admin@gmail.com'
    const Password = 'demo'
    const { email, password } = action.payload
    console.log("call auth")
    try {
        if (email === Email && password === Password) {
            yield put({
                type: types.LOGIN_SUCCESS,
            });
        }
        else {
            console.log("not match")
        }
    } catch (error) {

    }
}

export default function* authWatcher() {
    yield takeLatest(types.LOGIN_REQUEST, loginSaga);

}