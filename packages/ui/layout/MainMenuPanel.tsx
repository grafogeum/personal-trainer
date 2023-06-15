import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const MainMenuPanel = ({
	title,
	children,
}: {
	title?: string;
	children?: ReactNode;
}) => {
	return (
		<ChakraProvider>
			<div
				style={{
					backgroundColor: "#0e0d0d",
					height: "100%",
					display: "flex",
					flexGrow: 1,
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<h2>Title: {title}</h2>

				{children}

				<Text fontSize="20px" color="tomato">
					People who recommend me:
				</Text>
			</div>
		</ChakraProvider>
	);
};
