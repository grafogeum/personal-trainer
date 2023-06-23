import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
	userStatus: boolean;
	userName?: string;
}

const initialState: UserState = {
	userStatus: false,
	userName: "test",
};

type UserInfoSlice = ReturnType<typeof createSlice>;

export const userInfoSlice = createSlice<
	UserState,
	{
		// increment: (state: UserState) => void;

		userStatus: (state: UserState, action: PayloadAction<boolean>) => void;
		userLogin: (state: UserState) => void;
	},
	"userInfo"
>({
	name: "userInfo",
	initialState,
	reducers: {
		userStatus: (state, action: PayloadAction<boolean>) => {
			state.userStatus = action.payload;
		},
		userLogin: (state) => {
			state.userStatus = !state.userStatus;
		},
	},
});

// Action creators are generated for each case reducer function
export const { userLogin } = userInfoSlice.actions;

export default userInfoSlice.reducer;
