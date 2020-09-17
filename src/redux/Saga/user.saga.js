import * as types from '../Types/user.types';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as Services from '../Services/user.services'

function* getUserGraphSaga(action) {
    try {
        const response = yield call(Services.callGetUserGraph, action);
        console.log("response user graph is ", response)
        if (response.status === 200) {
            yield put({
                type: types.GET_USER_GRAPH_SUCCESS,
                payload: response.data.data
            });
        }
    } catch (error) {

    }
}

function* getStatsGraphSaga(action) {
    try {
        const response = yield call(Services.callGetStatsGraph, action);
        console.log("response all state is  ", response)
        if (response.status === 200) {
            yield put({
                type: types.GET_STATS_GRAPH_SUCCESS,
                payload: response.data.data
            });
        }
    } catch (error) {

    }
}



export default function* userWatcher() {
    yield takeLatest(types.GET_USER_GRAPH_REQUEST, getUserGraphSaga);
    yield takeLatest(types.GET_STATS_GRAPH_REQUEST, getStatsGraphSaga);

}