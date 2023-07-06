import { Input, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ModalContext from "./state/ModalContext";
import { ModalActionTypes } from "./state/ModalActions";
import { useLocalStorage } from "usehooks-ts";

export const FormInput = ({
	inputType = "",
	panelName = "",
	refer,
}: {
	inputType?: string;
	panelName?: string;
	refer?: React.RefObject<HTMLInputElement>;
}) => {
	const {
		state: { errorMessages },
		dispatch,
	} = useContext(ModalContext);
	const errorText =
		inputType && inputType in errorMessages
			? errorMessages[inputType as keyof typeof errorMessages]
			: "";
	const [inputField, setInputField] = useLocalStorage(panelName, {
		[inputType]: "",
	});

	useEffect(() => {
		console.log("panelNameINPUT", panelName);
	}, []);

	const borderColor = !errorMessages[inputType as keyof typeof errorMessages]
		? "purple.200"
		: "red.800";

	const inputStyle = {
		margin: "0.25rem ",
		border: `${!errorText ? "1px solid" : "3px solid"}`,
		borderColor: `${borderColor}`,
		backgroundColor: "transparent",
		color: "inherit",
	};

	const isTypingDispatch = {
		type: ModalActionTypes.IS_TYPING,
		payload: false,
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(isTypingDispatch);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [inputField]);

	useEffect(() => {
		dispatch({ ...isTypingDispatch, payload: true });
		return () => {
			dispatch(isTypingDispatch);
		};
	}, [inputField]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		type?: string
	) => {
		type === inputType &&
			setInputField((prevInputField) => ({
				...prevInputField,
				[inputType]: e.target.value,
			}));
	};

	return (
		<>
			<Input
				// className="autofill-hack"
				id={inputType}
				ref={refer}
				type={inputType}
				value={inputField[inputType] || ""}
				placeholder={inputType}
				onChange={(e) => handleInputChange(e, inputType)}
				focusBorderColor="red.300"
				borderColor={borderColor}
				backgroundColor="#393939"
				sx={inputStyle}
			/>
			{errorMessages && <Text color="red.600">{errorText as string}</Text>}
		</>
	);
};
