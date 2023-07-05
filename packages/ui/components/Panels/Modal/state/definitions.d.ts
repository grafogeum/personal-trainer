export type ModalState = {
	errorMessages:
		| {
				inputType: string;
		  }
		| {};
	labelProps: string;
	multipleLabels: string[];
	inputType: string | null;
	multipleInputs: string[];
	test: string;
	isTyping: boolean;
};
