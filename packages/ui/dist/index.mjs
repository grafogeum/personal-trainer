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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// layout/MainMenuPanel.tsx
import { ChakraProvider } from "@chakra-ui/react";
import styled from "@emotion/styled";

// components/Panels/MainMenu.tsx
import { useState as useState3 } from "react";
import { Menu, Button as Button3, Flex } from "@chakra-ui/react";
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

// components/Panels/Modal.tsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button as Button2,
  useDisclosure
} from "@chakra-ui/react";
import { useEffect, useReducer, useRef, useState as useState2 } from "react";

// components/Atoms/Form.tsx
import { FormControl, Input } from "@chakra-ui/react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Form = ({
  children,
  onSubmit
}) => {
  return /* @__PURE__ */ jsxs("form", { onSubmit, children: [
    /* @__PURE__ */ jsx3(FormControl, { mt: 4, isRequired: true, children }),
    /* @__PURE__ */ jsx3(Input, { type: "submit" })
  ] });
};

// components/Panels/Modal/ModalContext.ts
import { createContext } from "react";
var ModalContext = createContext({
  labelProps: "",
  multipleLabels: [""],
  inputType: "",
  multipleInputs: [""],
  state: { errorMessages: { inputType: null } }
});
var ModalContext_default = ModalContext;

// components/Panels/Modal/ModalContentProvider.tsx
import { useMemo } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var initialState2 = {
  errorMessages: { inputType: null }
};
var ModalContentProvider = ({
  children,
  state = initialState2,
  dispatch
}) => {
  const modalValue = useMemo(
    () => ({
      labelProps: "Label",
      multipleLabels: ["Email", "Password"],
      inputType: "",
      multipleInputs: ["mail", "password"],
      state,
      dispatch
    }),
    [state, dispatch]
  );
  return /* @__PURE__ */ jsx4(ModalContext_default.Provider, { value: modalValue, children });
};

// components/Panels/Modal/ModalLabel.tsx
import { FormLabel } from "@chakra-ui/react";
import { useContext } from "react";
import { Fragment, jsx as jsx5 } from "react/jsx-runtime";
var Label = ({ labelProps }) => {
  const { multipleLabels } = useContext(ModalContext_default);
  return /* @__PURE__ */ jsx5(Fragment, { children: labelProps ? /* @__PURE__ */ jsx5(
    FormLabel,
    {
      sx: { position: "relative", margin: "0.25rem " },
      requiredIndicator: /* @__PURE__ */ jsx5(
        "span",
        {
          style: {
            color: "#D6BCFA",
            position: "absolute",
            top: "-5px",
            paddingLeft: "5px"
          },
          children: "\uFF0A"
        }
      ),
      children: labelProps
    }
  ) : multipleLabels.map((label) => /* @__PURE__ */ jsx5(FormLabel, { children: label }, label)) });
};

// components/Panels/Modal/ModalInput.tsx
import { Input as Input2, Text } from "@chakra-ui/react";
import { useContext as useContext2, useState } from "react";
import { Fragment as Fragment2, jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var FormInput = ({
  inputType = "",
  refer
}) => {
  const {
    state: { errorMessages }
  } = useContext2(ModalContext_default);
  const errorText = inputType && inputType in errorMessages ? errorMessages[inputType] : "";
  const [inputField, setInputField] = useState({
    [inputType]: ""
  });
  const borderColor = !errorMessages[inputType] ? "purple.200" : "red.800";
  const inputStyle = {
    margin: "0.25rem ",
    border: `${!errorText ? "1px solid" : "3px solid"}`,
    borderColor: `${borderColor}`,
    backgroundColor: "transparent",
    color: "inherit"
  };
  const handleInputChange = (e, type) => {
    type === inputType && setInputField((prevInputField) => __spreadProps(__spreadValues({}, prevInputField), {
      [inputType]: e.target.value
    }));
  };
  return /* @__PURE__ */ jsxs2(Fragment2, { children: [
    /* @__PURE__ */ jsx6(
      Input2,
      {
        id: inputType,
        ref: refer,
        type: inputType,
        value: inputField[inputType],
        placeholder: inputType,
        onChange: (e) => handleInputChange(e, inputType),
        focusBorderColor: "red.300",
        borderColor,
        backgroundColor: "#393939",
        sx: inputStyle
      }
    ),
    errorMessages && /* @__PURE__ */ jsx6(Text, { color: "red.600", children: errorText })
  ] });
};

// components/Panels/Modal/ModalPanel.tsx
import { Fragment as Fragment3, jsx as jsx7 } from "react/jsx-runtime";
var ModalPanel = ({ children }) => /* @__PURE__ */ jsx7(Fragment3, { children });
ModalPanel.Label = Label;
ModalPanel.Input = FormInput;

// components/Panels/Modal.tsx
import * as yup from "yup";

// components/Panels/Modal/ModalReducer.ts
var initialState3 = {
  errorMessages: []
};
var ModalReducer = (state = initialState3, action) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGES" /* SET_ERROR_MESSAGES */:
      return __spreadProps(__spreadValues({}, state), {
        errorMessages: action.payload
      });
    default:
      return state;
  }
};

// components/Panels/Modal.tsx
import { Fragment as Fragment4, jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var personSchema = yup.object({
  email: yup.string().default("mail@domain.com").nullable("Email is invalid").email("Email is invalid").matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, "Email is invalid").required("Email is required"),
  password: yup.string().min(8, "Password is to short").max(40, "Password is to long").required("Password is required")
});
var InitialFocus = ({ registerInit }) => {
  const [initialized, setInitialized] = useState2(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formValues, setFormValues] = useState2({
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState2({
    email: "",
    password: ""
  });
  const initialState4 = {
    errorMessages: { inputType: null }
  };
  const [state, dispatch] = useReducer(ModalReducer, initialState4);
  useEffect(() => {
    initialized ? onOpen() : setInitialized(true);
  }, [registerInit, registerInit]);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);
  const handleSubmit = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    if (!userEmailRef.current || !userPasswordRef.current) {
      return;
    }
    const formData = {
      email: userEmailRef.current.value,
      password: userPasswordRef.current.value
    };
    try {
      yield personSchema.validate(formData, { abortEarly: false });
      setFormValues(formData);
      dispatch({
        type: "SET_ERROR_MESSAGES" /* SET_ERROR_MESSAGES */,
        payload: {
          email: "",
          password: ""
        }
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
        dispatch({
          type: "SET_ERROR_MESSAGES" /* SET_ERROR_MESSAGES */,
          payload: errors
        });
      }
    }
    try {
      setFormValues(formData);
    } catch (error) {
    }
  });
  useEffect(() => {
  }, [formErrors, formValues]);
  return /* @__PURE__ */ jsx8(Fragment4, { children: /* @__PURE__ */ jsxs3(
    Modal,
    {
      initialFocusRef: initialRef,
      finalFocusRef: finalRef,
      isOpen,
      onClose,
      children: [
        /* @__PURE__ */ jsx8(ModalOverlay, {}),
        /* @__PURE__ */ jsxs3(
          ModalContent,
          {
            backgroundColor: "gray.800",
            color: "white",
            borderRadius: "md",
            children: [
              /* @__PURE__ */ jsx8(ModalHeader, { color: "purple.200", children: "Create your account" }),
              /* @__PURE__ */ jsx8(ModalCloseButton, {}),
              /* @__PURE__ */ jsx8(ModalContentProvider, { state, dispatch, children: /* @__PURE__ */ jsxs3(Form, { onSubmit: handleSubmit, children: [
                /* @__PURE__ */ jsx8(ModalBody, { pb: 6, children: /* @__PURE__ */ jsxs3(ModalPanel, { children: [
                  /* @__PURE__ */ jsx8(ModalPanel.Label, { labelProps: "Email" }),
                  /* @__PURE__ */ jsx8(ModalPanel.Input, { inputType: "email", refer: userEmailRef }),
                  /* @__PURE__ */ jsx8(ModalPanel.Label, { labelProps: "Password" }),
                  /* @__PURE__ */ jsx8(
                    ModalPanel.Input,
                    {
                      inputType: "password",
                      refer: userPasswordRef
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxs3(ModalFooter, { children: [
                  /* @__PURE__ */ jsx8(Button2, { bg: "green.200", mr: 3, children: "Save" }),
                  /* @__PURE__ */ jsx8(Button2, { onClick: onClose, children: "Cancel" })
                ] })
              ] }) })
            ]
          }
        )
      ]
    }
  ) });
};

// components/Panels/MainMenu.tsx
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var MainMenu = () => {
  const [registerInit, setRegisterInit] = useState3(false);
  const { userStatus, userName } = useSelector(
    (state) => state.userStatus
  );
  const dispatch = useDispatch();
  const buttonsHandlers = [
    () => dispatch(userLogin()),
    () => setRegisterInit(!registerInit),
    () => {
      console.log("LOG OUT" /* LOGOUT */);
      dispatch(userLogin());
    }
  ];
  const buttons = buttonsPanel(userStatus, dispatch, buttonsHandlers);
  return /* @__PURE__ */ jsx9(Menu, { children: /* @__PURE__ */ jsxs4(
    Flex,
    {
      minWidth: "max-content",
      alignItems: "center",
      justifyContent: "right",
      gap: "4",
      children: [
        /* @__PURE__ */ jsx9(InitialFocus, { registerInit }),
        buttons.map(
          (_a, i) => {
            var _b = _a, { text, render, onClick, hasUserName, commonStyles: commonStyles2 } = _b, rest = __objRest(_b, ["text", "render", "onClick", "hasUserName", "commonStyles"]);
            return render && /* @__PURE__ */ jsxs4(
              Button3,
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
      ]
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
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
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
}) => /* @__PURE__ */ jsx10(Provider, { store, children: /* @__PURE__ */ jsx10(ChakraProvider, { children: /* @__PURE__ */ jsxs5(Container, { children: [
  /* @__PURE__ */ jsxs5(Title, { children: [
    "Title: ",
    title
  ] }),
  /* @__PURE__ */ jsx10(MainMenu, {}),
  children
] }) }) });
export {
  MainMenuPanel
};
