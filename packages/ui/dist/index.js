"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  MainMenuPanel: () => MainMenuPanel
});
module.exports = __toCommonJS(ui_exports);

// layout/MainMenuPanel.tsx
var import_react = require("@chakra-ui/react");
var import_styled = __toESM(require("@emotion/styled"));
var import_jsx_runtime = require("react/jsx-runtime");
var Container = import_styled.default.div`
	background-color: #0e0d0d;
	height: 100%;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	min-height: 100vh;
`;
var Title = import_styled.default.h2`
	color: #fff;
`;
var MainMenuPanel = ({
  title,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ChakraProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
    "Title: ",
    title
  ] }),
  children
] }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainMenuPanel
});
