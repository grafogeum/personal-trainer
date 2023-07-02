import { FormControl, Input } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FormInput } from "../Panels/Modal/ModalInput";

export const Form = ({
	children,
	onSubmit,
}: {
	children: ReactNode;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<form onSubmit={onSubmit}>
			<FormControl mt={4} isRequired>
				{children}
			</FormControl>
			<Input type="submit" />
		</form>
	);
};
