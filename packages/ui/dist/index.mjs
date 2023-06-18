// layout/MainMenuPanel.tsx
import { ChakraProvider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { jsx, jsxs } from "react/jsx-runtime";
var Container = styled.div`
	background-color: #0e0d0d;
	height: 100%;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	min-height: 100vh;
`;
var Title = styled.h2`
	color: #fff;
`;
var MainMenuPanel = ({
  title,
  children
}) => /* @__PURE__ */ jsx(ChakraProvider, { children: /* @__PURE__ */ jsxs(Container, { children: [
  /* @__PURE__ */ jsxs(Title, { children: [
    "Title: ",
    title
  ] }),
  children
] }) });
export {
  MainMenuPanel
};
