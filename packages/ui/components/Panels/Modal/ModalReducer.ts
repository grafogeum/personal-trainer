const initialState = {
	errorMessages: [],
};

export enum ModalActionTypes {
	// OPEN_MODAL = "OPEN_MODAL",
	// CLOSE_MODAL = "CLOSE_MODAL",
	SET_ERROR_MESSAGES = "SET_ERROR_MESSAGES",
}

export interface ModalAction {
	type: ModalActionTypes;
	payload: any;
}

export const ModalReducer = (state = initialState, action: ModalAction) => {
	switch (action.type) {
		// case ModalActionTypes.OPEN_MODAL:
		// 	return {
		// 		...state,
		// 		errorMessages: action.payload.errorMessages,
		// 	};
		case ModalActionTypes.SET_ERROR_MESSAGES:
			return {
				...state,
				errorMessages: action.payload,
			};

		default:
			return state;
	}
};
