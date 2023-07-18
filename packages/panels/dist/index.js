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
  Column: () => Column,
  FlowPlanner: () => FlowPlanner,
  Goal: () => Goal,
  MainBoard: () => MainBoard,
  TaskListDnD: () => TaskListDnD
});
module.exports = __toCommonJS(panels_exports);

// layouts/MainBoard.tsx
var import_react_dnd3 = require("react-dnd");
var import_react_dnd_html5_backend = require("react-dnd-html5-backend");

// components/Column.tsx
var import_react = require("react");

// components/Goal.tsx
var import_styled = __toESM(require("@emotion/styled"));
var import_react_dnd = require("react-dnd");
var import_jsx_runtime = require("react/jsx-runtime");
var ImageStyled = import_styled.default.div`
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
var import_styled2 = __toESM(require("@emotion/styled"));
var import_react_dnd2 = require("react-dnd");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ColumnStyled = import_styled2.default.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	align-items: start;
	border: 1px solid #000;
`;
var Column = () => {
  const [board, setBoard] = (0, import_react.useState)([]);
  const [{ isOver }, drop] = (0, import_react_dnd2.useDrop)(() => ({
    accept: "IMAGE" /* IMAGE */,
    drop: (item) => setBoard((board2) => [...board2, GoalList[item.id - 1]]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ColumnStyled, { ref: drop, children: board.map(
    ({ id, name, url }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Goal, __spreadValues({}, { url, name, id })) }, id)
  ) });
};

// components/TaskListDnD.tsx
var import_styled3 = __toESM(require("@emotion/styled"));
var import_react2 = require("@chakra-ui/react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Container = import_styled3.default.div`
	display: flex;
	flex-direction: row;
	flex-direction: column;
	justify-content: center;
	padding: 0;
	margin: 0;
`;
var TaskListDnD = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Box, { children: GoalList.map(({ id, name, url }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Goal, __spreadValues({}, { name, url, id })) }, id)) });
};

// layouts/MainBoard.tsx
var import_react3 = require("@chakra-ui/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var MainBoard = ({
  title,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_dnd3.DndProvider, { backend: import_react_dnd_html5_backend.HTML5Backend, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react3.Box, { display: "flex", width: "100%", boxSizing: "border-box", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TaskListDnD, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_react3.Box,
      {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Column, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Column, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Column, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Column, {})
        ]
      }
    )
  ] }) });
};

// layouts/FlowPlanner/FlowPlanner.tsx
var import_react4 = require("react");
var import_reactflow = __toESM(require("reactflow"));
var import_style = require("reactflow/dist/style.css");

// layouts/FlowPlanner/DefaultNodes.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var defaultNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 }
  },
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: "Default Node" }) },
    position: { x: 100, y: 125 }
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 250 }
  }
];
var DefaultNodes_default = defaultNodes;

// layouts/FlowPlanner/DefaultEdges.ts
var defaultEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true }
];
var DefaultEdges_default = defaultEdges;

// layouts/FlowPlanner/FlowPlanner.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } }
];
var initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
var FlowPlanner = () => {
  const [nodes, setNodes, onNodesChange] = (0, import_reactflow.useNodesState)(initialNodes);
  const [edges, setEdges, onEdgesChange] = (0, import_reactflow.useEdgesState)(initialEdges);
  const onConnect = (0, import_react4.useCallback)(
    (params) => setEdges((eds) => (0, import_reactflow.addEdge)(params, eds)),
    [setEdges]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { width: "100vw", height: "90vh" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_reactflow.default,
    {
      defaultNodes: DefaultNodes_default,
      defaultEdges: DefaultEdges_default,
      fitView: true,
      onNodesChange,
      onEdgesChange,
      onConnect,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_reactflow.Controls, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_reactflow.MiniMap, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_reactflow.Background,
          {
            id: "1",
            gap: 10,
            color: "#323232",
            variant: import_reactflow.BackgroundVariant.Lines
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_reactflow.Background,
          {
            id: "2",
            gap: 100,
            offset: 1,
            color: "#f1f1f1",
            variant: import_reactflow.BackgroundVariant.Lines
          }
        )
      ]
    }
  ) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Column,
  FlowPlanner,
  Goal,
  MainBoard,
  TaskListDnD
});
