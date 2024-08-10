import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { jobsReducer } from "../Reducers/Reducer";
import { JobPostsReducer } from "../Reducers/joppostsReducers";
import UserReducer from "../Reducers/UserReducer";
import { JopformVisibilityReducer } from "../Reducers/FormvisibiltyReducer";
import { PorgressReducer } from "../Reducers/ProgressReducer";
const RootReducer = combineReducers({
  jobscards: jobsReducer,
  jobsPosts: JobPostsReducer,
  userState: UserReducer,
  visibilityReducer: JopformVisibilityReducer,
  ProgressBar: PorgressReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));
export default store;
