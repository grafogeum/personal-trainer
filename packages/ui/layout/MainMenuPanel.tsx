import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Container = styled.div`
	background-color: #0e0d0d;
	height: 100%;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	min-height: 100vh;
`;

const Title = styled.h2`
	color: #fff;
`;

export const MainMenuPanel = ({
	title,
	children,
}: {
	title?: string;
	children?: ReactNode;
}) => (
	<ChakraProvider>
		<Container>
			<Title>Title: {title}</Title>
			{children}
		</Container>
	</ChakraProvider>
);
