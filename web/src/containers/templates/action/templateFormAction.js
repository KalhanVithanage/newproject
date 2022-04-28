import {
  SAVE_FORM_REQUEST,
  SAVE_FORM_IN_PROGRESS,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAILED,
} from "../constants";

const saveForm = (payload) => ({
  type: SAVE_FORM_REQUEST,
  payload,
});

const saveFormInProgress = () => ({
  type: SAVE_FORM_IN_PROGRESS,
});

const saveFormSuccess = (result) => ({
  type: SAVE_FORM_SUCCESS,
  result,
});

const saveFormFailed = (error) => ({
  type: SAVE_FORM_FAILED,
  error,
});

export { saveForm, saveFormInProgress, saveFormSuccess, saveFormFailed };
