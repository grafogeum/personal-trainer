"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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
var ui_exports = {};
__export(ui_exports, {
  MainMenuPanel: () => MainMenuPanel
});
module.exports = __toCommonJS(ui_exports);

// layout/MainMenuPanel.tsx
var import_react3 = require("@chakra-ui/react");
var import_styled = __toESM(require("@emotion/styled"));

// components/Panels/MainMenu.tsx
var import_react2 = require("@chakra-ui/react");
var import_react_redux = require("react-redux");

// store/userInfoSlice.ts
var import_toolkit = require("@reduxjs/toolkit");
var initialState = {
  userStatus: false,
  userName: "test"
};
var userInfoSlice = (0, import_toolkit.createSlice)({
  name: "userInfo",
  initialState,
  reducers: {
    userStatus: (state, action) => {
      state.userStatus = action.payload;
    },
    userLogin: (state) => {
      state.userStatus = !state.userStatus;
    }
  }
});
var { userLogin } = userInfoSlice.actions;
var userInfoSlice_default = userInfoSlice.reducer;

// components/Panels/LoginButtons.tsx
var import_react = require("@chakra-ui/react");

// components/Icons/User.tsx
var import_icons = require("@chakra-ui/icons");
var import_jsx_runtime = require("react/jsx-runtime");
var User = (0, import_icons.createIcon)({
  displayName: "UpDownIcon",
  viewBox: "0 0 20 20",
  path: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
    }
  )
});

// components/Panels/LoginButtons.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var commonStyles = {
  bg: "purple.200",
  colorScheme: "purple.200",
  variant: "outline",
  color: "#ffffff",
  _hover: { bg: "purple.100" },
  minW: "140px",
  minH: "12"
};
var buttonsPanel = (userStatus, dispatch, onClick) => [
  {
    text: userStatus ? "" : "LOG IN" /* LOGIN */,
    onClick,
    as: import_react.Button,
    rightIcon: userStatus ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(User, { w: 8, h: 8, color: "purple.700" }) : void 0,
    commonStyles,
    hasUserName: userStatus ? true : false,
    render: true
  },
  {
    text: "REGISTER" /* REGISTER */,
    onClick,
    commonStyles,
    render: !userStatus
  },
  {
    text: "LOG OUT" /* LOGOUT */,
    onClick,
    commonStyles,
    render: userStatus
  }
];

// components/Panels/MainMenu.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var MainMenu = () => {
  const { userStatus, userName } = (0, import_react_redux.useSelector)(
    (state) => state.userStatus
  );
  const dispatch = (0, import_react_redux.useDispatch)();
  const buttonsHandlers = [
    () => dispatch(userLogin()),
    () => console.log("REGISTER" /* REGISTER */),
    () => console.log("LOG OUT" /* LOGOUT */)
  ];
  const buttons = buttonsPanel(userStatus, dispatch, buttonsHandlers);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Menu, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react2.Flex,
    {
      minWidth: "max-content",
      alignItems: "center",
      justifyContent: "right",
      gap: "4",
      children: buttons.map(
        (_a, i) => {
          var _b = _a, { text, render, onClick, hasUserName, commonStyles: commonStyles2 } = _b, rest = __objRest(_b, ["text", "render", "onClick", "hasUserName", "commonStyles"]);
          return render && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            import_react2.Button,
            __spreadProps(__spreadValues(__spreadValues({}, rest), commonStyles2), {
              onClick: () => {
                if (Array.isArray(onClick)) {
                  onClick[i]();
                }
              },
              children: [
                hasUserName && (userName == null ? void 0 : userName.toUpperCase()),
                ` `,
                text
              ]
            }),
            text
          );
        }
      )
    }
  ) });
};

// store/store.ts
var import_toolkit2 = require("@reduxjs/toolkit");
var store = (0, import_toolkit2.configureStore)({
  reducer: {
    userStatus: userInfoSlice_default
  }
});

// layout/MainMenuPanel.tsx
var import_react_redux2 = require("react-redux");
var import_jsx_runtime4 = require("react/jsx-runtime");
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
}) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_redux2.Provider, { store, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.ChakraProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Container, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Title, { children: [
    "Title: ",
    title
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MainMenu, {}),
  children
] }) }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainMenuPanel
});
