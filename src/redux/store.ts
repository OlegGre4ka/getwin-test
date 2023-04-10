import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./reducers/profileReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({profile: profileReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;