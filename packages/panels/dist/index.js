"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
var panels_exports = {};
__export(panels_exports, {
  MainBoard: () => MainBoard
});
module.exports = __toCommonJS(panels_exports);

// layouts/MainBoard.tsx
var import_react_dnd3 = require("react-dnd");
var import_react_dnd_html5_backend = require("react-dnd-html5-backend");

// components/DragDrop.tsx
var import_react = require("react");
var import_styled2 = __toESM(require("@emotion/styled"));

// components/Picture.tsx
var import_styled = __toESM(require("@emotion/styled"));
var import_react_dnd = require("react-dnd");
var import_jsx_runtime = require("react/jsx-runtime");
var ImageStyled = import_styled.default.div`
	width: 100px;
	height: 100px;
	position: relative;
	display: block;
	border: ${({ isDragging }) => isDragging ? "1px solid #fc44c8" : "1px solid black"};
	opacity: ${({ canDrag }) => canDrag ? 1 : 0.5};
	background: ${({ url }) => `url(${url}) no-repeat center center `};
	background-size: cover;
	z-index: 0;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		background-color: #c4e653;
		transition: opacity 0.2s ease-in-out;
		z-index: 1;
		opacity: 0;
	}

	&:hover::before {
		opacity: 0.5;
	}
`;
var Picture = ({
  url,
  name,
  id
}) => {
  const [{ isDragging, canDrag }, drag] = (0, import_react_dnd.useDrag)(() => ({
    type: "IMAGE" /* IMAGE */,
    item: { id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      canDrag: monitor.canDrag()
    })
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ImageStyled,
    {
      isDragging,
      canDrag,
      ref: drag,
      url
    }
  );
};

// ../data/PictureList.ts
var PictureList = [
  {
    id: 1,
    name: "Picture 1",
    url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1410&q=80"
  },
  {
    id: 2,
    name: "Picture 2",
    url: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: 3,
    name: "Picture 3",
    url: "https://images.unsplash.com/photo-1671490289892-502ca32a3a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }
];

// components/DragDrop.tsx
var import_react_dnd2 = require("react-dnd");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Board = import_styled2.default.div`
	width: 200px;
	height: 350px;
	border: 1px solid #000;
`;
var Container = import_styled2.default.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
var DragDrop = () => {
  const [board, setBoard] = (0, import_react.useState)([]);
  const [{ isOver }, drop] = (0, import_react_dnd2.useDrop)(() => ({
    accept: "IMAGE" /* IMAGE */,
    drop: (item) => setBoard((board2) => [...board2, PictureList[item.id - 1]]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "pictures", children: PictureList.map(({ id, name, url }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Picture, __spreadValues({}, { name, url, id })) }, id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Board, { ref: drop, children: board.map(
      ({ id, name, url }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Picture, __spreadValues({}, { url, name, id })) }, id)
    ) })
  ] });
};

// layouts/MainBoard.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var MainBoard = ({
  title,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_dnd3.DndProvider, { backend: import_react_dnd_html5_backend.HTML5Backend, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: title }),
    children,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DragDrop, {})
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainBoard
});
