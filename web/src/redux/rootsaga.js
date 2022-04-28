import { all, fork } from "redux-saga/effects";
import formTemplateSagas from "../containers/templates/sagas/templateFormSaga";
import loginSagas from "../containers/user/sagas/loginSagas";

export default function* rootSaga() {
    return yield all([
 
          fork(loginSagas),
          fork(formTemplateSagas)

    ])

}
