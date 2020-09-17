import * as types from '../Types/shipment.types';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as Services from '../Services/shipment.service'

function* getShipmentGraphSaga(action) {
    console.log("saga is call user")
    try {
        const response = yield call(Services.callGetShipmentGraph, action);
        console.log("response Shipment Graph  is", response)
        if (response.status === 200) {
            yield put({
                type: types.GET_SHIPMENT_GRAPH_SUCCESS,
                payload: response.data.data
            });
        }
    } catch (error) {

    }
}





export default function* shipmentWatcher() {
    yield takeLatest(types.GET_SHIPMENT_GRAPH_REQUEST, getShipmentGraphSaga);


}