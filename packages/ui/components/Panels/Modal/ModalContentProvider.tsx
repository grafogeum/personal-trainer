import ModalContext from "./ModalContext";
import { useMemo, Dispatch } from "react";
import { ModalAction } from "./ModalReducer";

export interface ModalContextType {
	labelProps: string;
	multipleLabels: string[];
	inputType: string;
	multipleInputs: string[];
	state: { errorMessages: { inputType: null } };
}

const initialState = {
	errorMessages: { inputType: null },
};

export const ModalContentProvider = ({
	children,
	state = initialState,
	dispatch,
}: {
	children: React.ReactNode;
	state: { errorMessages: { inputType: null } };
	dispatch: React.Dispatch<ModalAction>;
}) => {
	const modalValue = useMemo(
		() => ({
			labelProps: "Label",
			multipleLabels: ["Email", "Password"],
			inputType: "",
			multipleInputs: ["mail", "password"],
			state,
			dispatch,
		}),
		[state, dispatch]
	);

	return (
		<ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
	);
};
