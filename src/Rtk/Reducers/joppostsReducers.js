import { GET_JOBS_POSTS, POST_JOB_SUCCESS } from "../actions/Actions";

// set post Reducers
const initialState = {
  JopPosts: [],
  publishJopPosts: [],
};
export const JobPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_JOB_SUCCESS:
      return {
        ...state,
        JopPosts: action.payload,
      };
    case GET_JOBS_POSTS:
      return {
        ...state,
        publishJopPosts: action.payload,
      };
    default:
      return state;
  }
};
