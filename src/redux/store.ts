import {createStore, combineReducers, applyMiddleware} from "redux";
import setEmailReducer from "./reducers/setEmailReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({email:setEmailReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;