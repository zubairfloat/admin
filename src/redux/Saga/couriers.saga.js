import * as types from '../Types/courier.types';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as Services from '../Services/courier.service'

function* getCourierGraphSaga(action) {
    try {
        const response = yield call(Services.callGetCourierGraph, action);
        console.log("response courier graph is ", response)
        if (response.status === 200) {
            yield put({
                type: types.GET_COURIER_GRAPH_SUCCESS,
                payload: response.data.data
            });
        }
    } catch (error) {

    }
}


export default function* courierWatcher() {
    yield takeLatest(types.GET_COURIER_GRAPH_REQUEST, getCourierGraphSaga);
}