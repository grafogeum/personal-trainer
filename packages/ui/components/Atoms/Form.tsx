import { FormControl } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Form = ({
	children,
	onSubmit,
}: {
	children: ReactNode;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<FormControl id={""} mt={4} isRequired>
			<form onSubmit={onSubmit}>{children}</form>
		</FormControl>
	);
};
