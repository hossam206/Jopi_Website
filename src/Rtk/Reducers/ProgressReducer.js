import { SET_PROGRESS } from "../actions/Actions";

const initialState = {
  progress: 0,
};

export const PorgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    default:
      return state;
  }
};
