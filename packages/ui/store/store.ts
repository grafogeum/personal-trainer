import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";

export interface Store {
	user: string | null;
	setUser: (user: string | null) => void;
}

export const store = configureStore({
	reducer: {
		userStatus: userInfoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
