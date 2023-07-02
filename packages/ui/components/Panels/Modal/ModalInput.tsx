import { Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import ModalContext from "./ModalContext";

export const FormInput = ({
	inputType = "",
	refer,
}: {
	inputType?: string;
	refer?: React.RefObject<HTMLInputElement>;
}) => {
	const {
		state: { errorMessages },
	} = useContext(ModalContext);
	const errorText =
		inputType && inputType in errorMessages
			? errorMessages[inputType as keyof typeof errorMessages]
			: "";
	const [inputField, setInputField] = useState({
		[inputType]: "",
	});

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

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		type?: string
	) => {
		type === inputType &&
			setInputField((prevInputField) => ({
				...prevInputField,
				[inputType]: e.target.value,
			}));
		// dispatch({});
	};

	return (
		<>
			<Input
				// className="autofill-hack"
				id={inputType}
				ref={refer}
				type={inputType}
				value={inputField[inputType]}
				placeholder={inputType}
				onChange={(e) => handleInputChange(e, inputType)}
				focusBorderColor="red.300"
				borderColor={borderColor}
				backgroundColor="#393939"
				sx={inputStyle}
			/>
			{errorMessages && <Text color="red.600">{errorText}</Text>}
		</>
	);
};
