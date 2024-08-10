import {
  APPLIED_JOP,
  DELETE_APPLIED_JOP,
  DELETE_JOP,
  SAVE_JOP,
} from "../actions/Actions";
const initialState = {
  jobs: [],
  AppliedJobs: [],
};
export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_JOP:
 
      const isJobAlreadySaved = state.jobs.find(
        (jop) => jop.id === action.payload.id
      );
      if (isJobAlreadySaved) {
        return state;
      } else {
        return {
          ...state,
          jobs: Array.isArray(action.payload)
            ? [...state.jobs, ...action.payload] // If payload is an array, spread it
            : [...state.jobs, action.payload], // If payload is a single job, add it directly
        };
      }
    case DELETE_JOP:
      return {
        ...state,
        jobs: state.jobs.filter((jop) => jop.id !== action.payload),
      };

    case DELETE_APPLIED_JOP:
      return {
        ...state,
        AppliedJobs: state.AppliedJobs.filter(
          (jop) => jop.id != action.payload
        ),
      };

    case APPLIED_JOP:
      if (state.AppliedJobs.find((jop) => jop.id === action.payload.id)) {
        return state; // Job is already applied
      } else {
        return {
          AppliedJobs: [...state.AppliedJobs, action.payload],
        };
      }

    default:
      return state;
  }
};
