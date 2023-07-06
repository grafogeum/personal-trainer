import { createContext } from "react";
import { Action } from "./ModalReducer";

const ModalContext = createContext({
	state: {
		isTyping: false,
		errorMessages: {},
		test: "empty String",
	},
	dispatch: (arg: Action) => {},
});

export default ModalContext;
