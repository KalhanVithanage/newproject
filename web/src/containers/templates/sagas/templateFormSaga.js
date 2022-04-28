import { put, call, takeLatest, delay, takeEvery } from "redux-saga/effects";
import NotificationHelper from "../../../helpers/NotificationHelper";
import apiHandler from "../../../middlewares/connectApi";
import { saveFormFailed, saveFormInProgress, saveFormSuccess } from "../action/templateFormAction";
import { SAVE_FORM_REQUEST } from "../constants";


export function* saveForm(data) {
  try {
    yield put(saveFormInProgress());
    const result = yield call(apiHandler.saveForm, data);

    yield put(saveFormSuccess(result));
    if(result){
        NotificationHelper.getInstance().success("sucess");
    }
  } catch (error) {
    // let {
    //     response: { data }
    // } = error;
    yield put(saveFormFailed(error));
  }
}

export default function* formTemplateSagas() {
  yield* [takeLatest(SAVE_FORM_REQUEST, saveForm)];
}
