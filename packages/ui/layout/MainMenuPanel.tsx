import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MainMenu } from "../components/Panels/MainMenu";
import { store } from "../store/store";
import { Provider } from "react-redux";

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
	<Provider store={store}>
		<ChakraProvider>
			<Container>
				<Title>Title: {title}</Title>
				<MainMenu />
				{children}
			</Container>
		</ChakraProvider>
	</Provider>
);
