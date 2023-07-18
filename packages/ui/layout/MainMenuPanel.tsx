import { Fragment, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MainMenu } from "../components/Panels/MainMenu";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pattern } from "../../enums/constants";

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

//TODO: move to components  !!!!!

const LinkStyled = styled.a<{ isActive?: boolean }>`
	color: ${({ isActive }) => (isActive ? "#d6bcfa" : "#fff")};
	font: "20px Tahoma Bold";
	text-transform: uppercase;
	margin: 0 20px;
	:not(:first-of-type) {
		margin-left: 0px;
	}
`;
const Link = ({ path, isActive }: { path: string; isActive: boolean }) => {
	path &&= RegExp(pattern).exec(path)?.[1] || "";
	return (
		<LinkStyled isActive={isActive} href={path}>
			{path}
		</LinkStyled>
	);
};

const Navigation = styled.nav`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	width: 100%;
`;

const NavigationLinksStyled = styled.div`
	display: flex;
	align-items: baseline;
	background-color: #333;
`;

export const MainMenuPanel = ({
	title,
	menuLinks = [],
	children,
}: {
	title?: string;
	menuLinks?: {
		path: string;
		component: any;
	}[];

	children?: ReactNode;
}) => (
	<Provider store={store}>
		<ChakraProvider>
			<Container>
				<Title>Title: {title}</Title>
				<Navigation>
					<NavigationLinksStyled>
						{menuLinks.map(({ path }, i) => {
							const currentPath = window.location.pathname;
							const isActive = currentPath === path;
							return (
								<Fragment key={[path, i].join("")}>
									<Link path={path} isActive={isActive} />
								</Fragment>
							);
						})}
					</NavigationLinksStyled>
					<MainMenu />
				</Navigation>
				{menuLinks.map(({ path, component }, i) => {
					return (
						<Fragment key={[path, i].join("")}>
							<BrowserRouter>
								<Routes>
									<Route path={path} element={component} />
								</Routes>
							</BrowserRouter>
						</Fragment>
					);
				})}

				{children}
			</Container>
		</ChakraProvider>
	</Provider>
);
