import ModalContext from "./ModalContext";
import { useMemo, useReducer } from "react";
import { ModalReducer } from "./ModalReducer";
import { ModalState } from "./definitions";

const initialState: ModalState = {
	errorMessages: { inputType: "" },
	isTyping: false,
	labelProps: "Label",
	multipleLabels: ["Email", "Password"],
	inputType: null,
	multipleInputs: ["mail", "password"],
	test: "test",
};

export const ModalContentProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(ModalReducer, initialState);

	const modalValue = useMemo(
		() => ({
			state,
			dispatch,
		}),
		[state, dispatch]
	);

	return (
		<ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
	);
};
