import { put, call, takeLatest, delay, takeEvery } from "redux-saga/effects";
import NotificationHelper from "../../../helpers/NotificationHelper";
import apiHandler from "../../../middlewares/connectApi";
import { doLoginFailed, doLoginInProgress, doLoginSuccess } from "../action/loginAction";
import { DO_LOGIN_REQUEST } from "../constants";

export function* doLogin(data) {
  try {
    yield put(doLoginInProgress());
    const result = yield call(apiHandler.doLogin, data.payload);

    yield put(doLoginSuccess(result));
    if(result){
        NotificationHelper.getInstance().success("logged");
    }
  } catch (error) {
    // let {
    //     response: { data }
    // } = error;
    yield put(doLoginFailed(error));
  }
}

export default function* loginSagas() {
  yield* [takeLatest(DO_LOGIN_REQUEST, doLogin)];
}
