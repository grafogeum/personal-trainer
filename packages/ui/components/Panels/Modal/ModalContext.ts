import { createContext } from "react";

const ModalContext = createContext({
	labelProps: "",
	multipleLabels: [""],
	inputType: "",
	multipleInputs: [""],
	state: { errorMessages: { inputType: null } },
});

export default ModalContext;
