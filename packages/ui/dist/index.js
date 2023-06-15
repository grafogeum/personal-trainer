"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  MainMenuPanel: () => MainMenuPanel
});
module.exports = __toCommonJS(ui_exports);

// layout/MainMenuPanel.tsx
var import_react = require("@chakra-ui/react");
var import_react2 = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var MainMenuPanel = ({
  title,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ChakraProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
          "Title: ",
          title
        ] }),
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Text, { fontSize: "20px", color: "tomato", children: "People who recommend me:" })
      ]
    }
  ) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainMenuPanel
});
