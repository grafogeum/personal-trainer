// layout/MainMenuPanel.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { jsx, jsxs } from "react/jsx-runtime";
var MainMenuPanel = ({
  title,
  children
}) => {
  return /* @__PURE__ */ jsx(ChakraProvider, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        backgroundColor: "#0e0d0d",
        height: "100%",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        minHeight: "100vh"
      },
      children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Title: ",
          title
        ] }),
        children,
        /* @__PURE__ */ jsx(Text, { fontSize: "20px", color: "tomato", children: "People who recommend me:" })
      ]
    }
  ) });
};
export {
  MainMenuPanel
};
