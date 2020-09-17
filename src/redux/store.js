import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reduxBatch } from "@manaflair/redux-batch";
import { persistStore } from "redux-persist";
import { rootReducer, rootSaga } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
