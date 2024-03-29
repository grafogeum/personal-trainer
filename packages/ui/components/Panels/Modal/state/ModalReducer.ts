import { ModalState } from "./definitions";
import { ModalActionTypes } from "./ModalActions";

export interface ModalAction {
	type: ModalActionTypes;
	payload: IsTypingAction | SetErrorMessagesAction;
}

interface IsTypingAction {
	type: ModalActionTypes.IS_TYPING;
	payload: boolean;
}
interface SetTestAction {
	type: ModalActionTypes.SET_TEST;
	payload: boolean;
}
export interface SetErrorMessagesAction {
	type: ModalActionTypes.SET_ERROR_MESSAGES;
	payload: { inputType: string } | {};
}
export type Action = IsTypingAction | SetErrorMessagesAction | SetTestAction;

export const ModalReducer = (state: ModalState, action: Action): ModalState => {
	switch (action.type) {
		case ModalActionTypes.IS_TYPING:
			return {
				...state,
				isTyping: action.payload,
			};
		case ModalActionTypes.SET_ERROR_MESSAGES:
			return {
				...state,
				errorMessages: action.payload,
			};
		case ModalActionTypes.SET_TEST:
			return {
				...state,
				errorMessages: action.payload,
			};
		default:
			return state;
	}
};
