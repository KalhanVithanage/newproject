import createSagaMiddleware from "@redux-saga/core";
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import reducer from "./rootReducer";
import rootSaga from "./rootsaga";

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
)(createStore)(persistedReducer);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)
export default store;
