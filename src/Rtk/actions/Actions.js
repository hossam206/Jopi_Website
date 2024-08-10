export const SAVE_JOP = "SAVE_JOP";
export const DELETE_JOP = "DELETE_JOP";
export const APPLIED_JOP = "APPLIED_JOP";
export const DELETE_APPLIED_JOP = "DELETE_APPLIED_JOP";
export const POST_JOB_START = "POST_JOB_START";
export const POST_JOB_SUCCESS = "POST_JOB_SUCCESS";
export const POST_JOB_FAILURE = "POST_JOB_FAILURE";
export const SET_USER = "SET_USER";
export const TOGGLE_POST_JOB_FORM = "TOGGLE_POST_JOB_FORM";
export const TOGGLE_Show_LogIn_FORM = "TOGGLE_Show_LogIn_FORM";
export const SET_PROGRESS = "SET_PROGRESS";
export const GET_JOBS_POSTS = "GET_JOBS_POSTS";
export const saveJop = (jops) => {
  return {
    type: SAVE_JOP,
    payload: jops,
  };
};

export const DeletejOP = (JopId) => {
  return {
    type: DELETE_JOP,
    payload: JopId,
  };
};
export const DeleteAppliedJop = (JopId) => {
  return {
    type: DELETE_APPLIED_JOP,
    payload: JopId,
  };
};
export const AppliedJop = (jop) => {
  return {
    type: APPLIED_JOP,
    payload: jop,
  };
};

export const SetUser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};

export const postJobSuccess = (job) => ({
  type: POST_JOB_SUCCESS,
  payload: job,
});

export const GetjobPosts = (payload) => {
  return {
    type: GET_JOBS_POSTS,
    payload: payload,
  };
};
// toggle show form or not
export const ToggleShowPostJobForm = (IsVisible) => {
  return {
    type: TOGGLE_POST_JOB_FORM,
    payload: IsVisible,
  };
};

// Toggle show LogIn Form
export const ToggleShowLogInForm = (IsVisible) => {
  return {
    type: TOGGLE_Show_LogIn_FORM,
    payload: IsVisible,
  };
};

// set progress width
export const SetProgress = (progreswidth) => {
  return {
    type: SET_PROGRESS,
    payload: progreswidth,
  };
};
