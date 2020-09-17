import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";

import authReducer from "./Reducer/auth.reducer";
import userReducer from './Reducer/user.reducer'
import shipmentReducer from './Reducer/shipment.reducer'
import courierReducer from './Reducer/courier.reducer'

import userWatcher from './Saga/user.saga'
import authWatcher from './Saga/auth.saga'
import shipmentWatcher from './Saga/shipment.saga'
import courierWatcher from './Saga/couriers.saga'


export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  shipment: shipmentReducer,
  courier: courierReducer
});

export function* rootSaga() {
  yield all([
    fork(userWatcher),
    fork(authWatcher),
    fork(shipmentWatcher),
    fork(courierWatcher)
  ]);

}
