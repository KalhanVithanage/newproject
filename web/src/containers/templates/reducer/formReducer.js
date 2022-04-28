import {
  SAVE_FORM_REQUEST,
  SAVE_FORM_IN_PROGRESS,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAILED,
} from "../constants";

const initialState = {
  saveForm_data: null,
  saveForm_inProgress: false,
  saveForm_error: null,
};

const templateFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM_REQUEST:
      return { ...state, saveForm_data: null };
    case SAVE_FORM_IN_PROGRESS:
      return { ...state, saveForm_inProgress: true };
    case SAVE_FORM_SUCCESS:
      return { state, saveForm_data: action.result };
    case SAVE_FORM_FAILED:
      return { state, saveForm_error: action.result };

    default:
      return state;
  }
};

export default templateFormReducer;
