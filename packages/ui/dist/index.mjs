var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

// layout/MainMenuPanel.tsx
import { ChakraProvider } from "@chakra-ui/react";
import styled from "@emotion/styled";

// components/Panels/MainMenu.tsx
import { Menu, Button as Button2, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

// store/userInfoSlice.ts
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
  userStatus: false,
  userName: "test"
};
var userInfoSlice = createSlice({
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
import { Button } from "@chakra-ui/react";

// components/Icons/User.tsx
import { createIcon } from "@chakra-ui/icons";
import { jsx } from "react/jsx-runtime";
var User = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 20 20",
  path: /* @__PURE__ */ jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
    }
  )
});

// components/Panels/LoginButtons.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
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
    as: Button,
    rightIcon: userStatus ? /* @__PURE__ */ jsx2(User, { w: 8, h: 8, color: "purple.700" }) : void 0,
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
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var MainMenu = () => {
  const { userStatus, userName } = useSelector(
    (state) => state.userStatus
  );
  const dispatch = useDispatch();
  const buttonsHandlers = [
    () => dispatch(userLogin()),
    () => console.log("REGISTER" /* REGISTER */),
    () => console.log("LOG OUT" /* LOGOUT */)
  ];
  const buttons = buttonsPanel(userStatus, dispatch, buttonsHandlers);
  return /* @__PURE__ */ jsx3(Menu, { children: /* @__PURE__ */ jsx3(
    Flex,
    {
      minWidth: "max-content",
      alignItems: "center",
      justifyContent: "right",
      gap: "4",
      children: buttons.map(
        (_a, i) => {
          var _b = _a, { text, render, onClick, hasUserName, commonStyles: commonStyles2 } = _b, rest = __objRest(_b, ["text", "render", "onClick", "hasUserName", "commonStyles"]);
          return render && /* @__PURE__ */ jsxs(
            Button2,
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
import { configureStore } from "@reduxjs/toolkit";
var store = configureStore({
  reducer: {
    userStatus: userInfoSlice_default
  }
});

// layout/MainMenuPanel.tsx
import { Provider } from "react-redux";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
}) => /* @__PURE__ */ jsx4(Provider, { store, children: /* @__PURE__ */ jsx4(ChakraProvider, { children: /* @__PURE__ */ jsxs2(Container, { children: [
  /* @__PURE__ */ jsxs2(Title, { children: [
    "Title: ",
    title
  ] }),
  /* @__PURE__ */ jsx4(MainMenu, {}),
  children
] }) }) });
export {
  MainMenuPanel
};
