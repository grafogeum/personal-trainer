var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// layouts/MainBoard.tsx
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// components/Column.tsx
import { useState } from "react";

// components/Goal.tsx
import styled from "@emotion/styled";
import { useDrag } from "react-dnd";
import { jsx } from "react/jsx-runtime";
var ImageStyled = styled.div`
	width: 100px;
	height: 100px;
	position: relative;
	display: flex;
	border: ${({ isDragging }) => isDragging ? "1px solid #fc44c8" : "1px solid black"};
	opacity: ${({ canDrag }) => canDrag ? 1 : 0.5};
	background: ${({ url }) => `url(${url}) no-repeat center center `};
	background-size: cover;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		background-color: #c4e653;
		transition: opacity 0.2s ease-in-out;
		opacity: 0;
	}

	&:hover::before {
		opacity: 0.5;
	}
`;
var Goal = ({
  url,
  name,
  id
}) => {
  const [{ isDragging, canDrag }, drag] = useDrag(() => ({
    type: "IMAGE" /* IMAGE */,
    item: { id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      canDrag: monitor.canDrag()
    })
  }));
  return /* @__PURE__ */ jsx(
    ImageStyled,
    {
      isDragging,
      canDrag,
      ref: drag,
      url
    }
  );
};

// ../data/GoalList.ts
var GoalList = [
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

// components/Column.tsx
import styled2 from "@emotion/styled";
import { useDrop } from "react-dnd";
import { jsx as jsx2 } from "react/jsx-runtime";
var ColumnStyled = styled2.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	align-items: start;
	border: 1px solid #000;
`;
var Column = () => {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "IMAGE" /* IMAGE */,
    drop: (item) => setBoard((board2) => [...board2, GoalList[item.id - 1]]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));
  return /* @__PURE__ */ jsx2(ColumnStyled, { ref: drop, children: board.map(
    ({ id, name, url }) => /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Goal, __spreadValues({}, { url, name, id })) }, id)
  ) });
};

// components/TaskListDnD.tsx
import styled3 from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Container = styled3.div`
	display: flex;
	flex-direction: row;
	flex-direction: column;
	justify-content: center;
	padding: 0;
	margin: 0;
`;
var TaskListDnD = () => {
  return /* @__PURE__ */ jsx3(Box, { children: GoalList.map(({ id, name, url }) => /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(Goal, __spreadValues({}, { name, url, id })) }, id)) });
};

// layouts/MainBoard.tsx
import { Box as Box2 } from "@chakra-ui/react";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var MainBoard = ({
  title,
  children
}) => {
  return /* @__PURE__ */ jsx4(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsxs(Box2, { display: "flex", width: "100%", m: 2, children: [
    /* @__PURE__ */ jsx4(TaskListDnD, {}),
    /* @__PURE__ */ jsxs(
      Box2,
      {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ jsx4(Column, {}),
          /* @__PURE__ */ jsx4(Column, {}),
          /* @__PURE__ */ jsx4(Column, {}),
          /* @__PURE__ */ jsx4(Column, {})
        ]
      }
    )
  ] }) });
};
export {
  Column,
  Goal,
  MainBoard,
  TaskListDnD
};
