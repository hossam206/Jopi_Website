import {
  TOGGLE_POST_JOB_FORM,
  TOGGLE_Show_LogIn_FORM,
} from "../actions/Actions";

const initialstate = {
  isJobFormVisible: false,
  isLoginFormVisible: false,
};
export const JopformVisibilityReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOGGLE_POST_JOB_FORM:
      return {
        ...state,
        isJobFormVisible: action.payload,
      };
    case TOGGLE_Show_LogIn_FORM:
      return {
        ...state,
        isLoginFormVisible: action.payload,
      };

    default:
      return state;
  }
};
