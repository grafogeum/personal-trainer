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
import { useState as useState4 } from "react";
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
    shouldDisplay: true
  },
  {
    text: "REGISTER" /* REGISTER */,
    onClick,
    commonStyles,
    shouldDisplay: !userStatus
  },
  {
    text: "LOG OUT" /* LOGOUT */,
    onClick,
    commonStyles,
    shouldDisplay: userStatus
  }
];

// components/Panels/Modal/Modal.tsx
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
import { Fragment as Fragment4, useContext as useContext3, useEffect as useEffect2, useRef, useState as useState2 } from "react";

// components/Panels/Modal/ModalLabel.tsx
import { FormLabel } from "@chakra-ui/react";
import { useContext } from "react";

// components/Panels/Modal/state/ModalContext.ts
import { createContext } from "react";
var ModalContext = createContext({
  state: {
    isTyping: false,
    errorMessages: {},
    test: "empty String",
    multipleLabels: [""]
  },
  dispatch: (arg) => {
  }
});
var ModalContext_default = ModalContext;

// components/Panels/Modal/ModalLabel.tsx
import { Fragment, jsx as jsx3 } from "react/jsx-runtime";
var LabelStyle = {
  color: "#D6BCFA",
  position: "absolute",
  top: "-5px",
  paddingLeft: "5px"
};
var Label = ({ labelProps }) => {
  const {
    state: { multipleLabels }
  } = useContext(ModalContext_default);
  return /* @__PURE__ */ jsx3(Fragment, { children: labelProps ? /* @__PURE__ */ jsx3(
    FormLabel,
    {
      sx: { position: "relative", margin: "0.25rem " },
      requiredIndicator: /* @__PURE__ */ jsx3("span", { style: LabelStyle, children: "\uFF0A" }),
      children: labelProps
    }
  ) : multipleLabels.map((label) => /* @__PURE__ */ jsx3(FormLabel, { children: label }, label)) });
};

// components/Panels/Modal/ModalInput.tsx
import { Input, Text } from "@chakra-ui/react";
import { useContext as useContext2, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Fragment as Fragment2, jsx as jsx4, jsxs } from "react/jsx-runtime";
var FormInput = ({
  inputType = "",
  panelName = "",
  refer
}) => {
  const {
    state: { errorMessages },
    dispatch
  } = useContext2(ModalContext_default);
  const errorText = inputType && inputType in errorMessages ? errorMessages[inputType] : "";
  const [inputField, setInputField] = useLocalStorage(panelName, {
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
  const isTypingDispatch = {
    type: "IS_TYPING" /* IS_TYPING */,
    payload: false
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(isTypingDispatch);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputField]);
  useEffect(() => {
    dispatch(__spreadProps(__spreadValues({}, isTypingDispatch), { payload: true }));
    return () => {
      dispatch(isTypingDispatch);
    };
  }, [inputField]);
  const handleInputChange = (e, type) => {
    type === inputType && setInputField((prevInputField) => __spreadProps(__spreadValues({}, prevInputField), {
      [inputType]: e.target.value
    }));
  };
  return /* @__PURE__ */ jsxs(Fragment2, { children: [
    /* @__PURE__ */ jsx4(
      Input,
      {
        id: inputType,
        ref: refer,
        type: inputType,
        value: inputField[inputType] || "",
        placeholder: inputType,
        onChange: (e) => handleInputChange(e, inputType),
        focusBorderColor: "red.300",
        borderColor,
        backgroundColor: "#393939",
        sx: inputStyle
      }
    ),
    errorMessages && /* @__PURE__ */ jsx4(Text, { color: "red.600", children: errorText })
  ] });
};

// components/Panels/Modal/ModalPanel.tsx
import { Fragment as Fragment3, jsx as jsx5 } from "react/jsx-runtime";
var ModalPanel = ({ children }) => /* @__PURE__ */ jsx5(Fragment3, { children });
ModalPanel.Label = Label;
ModalPanel.Input = FormInput;

// components/Atoms/Form.tsx
import { FormControl } from "@chakra-ui/react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Form = ({
  children,
  onSubmit
}) => {
  return /* @__PURE__ */ jsx6(FormControl, { id: "", mt: 4, isRequired: true, children: /* @__PURE__ */ jsx6("form", { onSubmit, children }) });
};

// components/Panels/Modal/Modal.tsx
import * as yup2 from "yup";

// components/Panels/Modal/state/Schemas.ts
import * as yup from "yup";
var registerSchema = yup.object({
  email: yup.string().default("mail@domain.com").nullable("Email is invalid").email("Email is invalid").matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, "Email is invalid").required("Email is required"),
  password: yup.string().min(8, "Password is to short").max(40, "Password is to long").required("Password is required")
});

// components/Panels/Modal/Modal.tsx
import { Fragment as Fragment5, jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var validateHelper = (formData) => __async(void 0, null, function* () {
  yield registerSchema.validate(formData, { abortEarly: false });
});
var UserLoginPanel = ({
  userModalType,
  formFields
}) => {
  var _a, _b, _c, _d;
  const [initialized, setInitialized] = useState2(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [validationAttempt, setValidationAttempt] = useState2(0);
  const {
    state: { isTyping },
    dispatch
  } = useContext3(ModalContext_default);
  useEffect2(() => {
    initialized ? onOpen() : setInitialized(true);
  }, [userModalType]);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);
  const formData = {
    email: (_b = (_a = userEmailRef.current) == null ? void 0 : _a.value) != null ? _b : "",
    password: (_d = (_c = userPasswordRef.current) == null ? void 0 : _c.value) != null ? _d : ""
  };
  const validateAndDispatch = (formData2) => __async(void 0, null, function* () {
    const errorDispatch = {
      type: "SET_ERROR_MESSAGES" /* SET_ERROR_MESSAGES */,
      payload: {}
    };
    try {
      yield validateHelper(formData2);
      dispatch(errorDispatch);
    } catch (error) {
      if (error instanceof yup2.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        dispatch(__spreadProps(__spreadValues({}, errorDispatch), {
          payload: errors
        }));
      }
    }
  });
  const handleSubmit = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    if (!userEmailRef.current || !userPasswordRef.current) {
      return;
    }
    yield validateAndDispatch(formData);
    setValidationAttempt((prev) => prev + 1);
  });
  useEffect2(() => {
    validationAttempt > 0 && validateAndDispatch(formData);
  }, [isTyping, validationAttempt]);
  const formFieldsWithValidation = formFields.map(
    (field) => field.label === "email" && __spreadProps(__spreadValues({}, field), { refer: userEmailRef }) || field.label === "password" && __spreadProps(__spreadValues({}, field), { refer: userPasswordRef }) || field
  );
  return /* @__PURE__ */ jsx7(Fragment5, { children: /* @__PURE__ */ jsxs2(
    Modal,
    {
      initialFocusRef: initialRef,
      finalFocusRef: finalRef,
      isOpen,
      onClose,
      children: [
        /* @__PURE__ */ jsx7(ModalOverlay, {}),
        /* @__PURE__ */ jsxs2(
          ModalContent,
          {
            backgroundColor: "gray.800",
            color: "white",
            borderRadius: "md",
            children: [
              /* @__PURE__ */ jsx7(ModalHeader, { color: "purple.200", children: "Create your account" }),
              /* @__PURE__ */ jsx7(ModalCloseButton, {}),
              /* @__PURE__ */ jsxs2(Form, { onSubmit: handleSubmit, children: [
                /* @__PURE__ */ jsx7(ModalBody, { pb: 6, children: formFieldsWithValidation.map(({ label, inputType, refer }) => /* @__PURE__ */ jsxs2(Fragment4, { children: [
                  /* @__PURE__ */ jsx7(ModalPanel.Label, { labelProps: label }),
                  /* @__PURE__ */ jsx7(
                    ModalPanel.Input,
                    {
                      panelName: userModalType.type,
                      inputType,
                      refer
                    }
                  )
                ] }, label)) }),
                /* @__PURE__ */ jsxs2(ModalFooter, { children: [
                  /* @__PURE__ */ jsx7(Button2, { bg: "green.200", mr: 3, type: "submit", children: "Save" }),
                  /* @__PURE__ */ jsx7(Button2, { onClick: onClose, children: "Cancel" })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  ) });
};

// components/Panels/Modal/state/ModalContentProvider.tsx
import { useMemo, useReducer } from "react";

// components/Panels/Modal/state/ModalReducer.ts
var ModalReducer = (state, action) => {
  switch (action.type) {
    case "IS_TYPING" /* IS_TYPING */:
      return __spreadProps(__spreadValues({}, state), {
        isTyping: action.payload
      });
    case "SET_ERROR_MESSAGES" /* SET_ERROR_MESSAGES */:
      return __spreadProps(__spreadValues({}, state), {
        errorMessages: action.payload
      });
    case "SET_TEST" /* SET_TEST */:
      return __spreadProps(__spreadValues({}, state), {
        errorMessages: action.payload
      });
    default:
      return state;
  }
};

// components/Panels/Modal/state/ModalContentProvider.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var initialState2 = {
  errorMessages: { inputType: "" },
  isTyping: false,
  labelProps: "Label",
  multipleLabels: ["Email", "Password"],
  inputType: null,
  multipleInputs: ["mail", "password"],
  test: "test"
};
var ModalContentProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState2);
  const modalValue = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state, dispatch]
  );
  return /* @__PURE__ */ jsx8(ModalContext_default.Provider, { value: modalValue, children });
};

// components/Panels/Footer/Footer.tsx
import { Fragment as Fragment7, useContext as useContext4, useEffect as useEffect4, useState as useState3 } from "react";

// components/Atoms/Notifications/Notifications.tsx
import { useEffect as useEffect3 } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment as Fragment6, jsx as jsx9 } from "react/jsx-runtime";
var Notifications = ({ notifText }) => {
  if (!notifText)
    return null;
  notifText && (notifText = notifText.trim().toLocaleUpperCase());
  useEffect3(() => {
    let timeoutId = null;
    const notify = () => notifText && toast(`${notifText}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: ` notif-${notifText.slice(0, 10).toLowerCase()}`
    });
    timeoutId = setTimeout(notify, 400);
    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [notifText]);
  return /* @__PURE__ */ jsx9(Fragment6, { children: /* @__PURE__ */ jsx9(ToastContainer, { theme: "dark" }) });
};

// components/Panels/Footer/Footer.tsx
import { Fragment as Fragment8, jsx as jsx10 } from "react/jsx-runtime";
var Footer = () => {
  const {
    state: { errorMessages },
    dispatch
  } = useContext4(ModalContext_default);
  const [inputText, inputTextSet] = useState3([]);
  useEffect4(() => {
    inputTextSet(Object.values(errorMessages));
  }, [errorMessages]);
  return /* @__PURE__ */ jsx10(Fragment8, { children: inputText.map((notification) => /* @__PURE__ */ jsx10(Fragment7, { children: /* @__PURE__ */ jsx10(Notifications, { notifText: notification }) }, notification)) });
};

// components/Panels/MainMenu.tsx
import { Fragment as Fragment9, jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
var MainMenu = () => {
  const [userLoginPanel, setUserLoginPanel] = useState4({
    type: "login",
    state: false
  });
  const [registerPanel, setRegisterPanel] = useState4({
    type: "register",
    state: false
  });
  const { userStatus, userName } = useSelector(
    (state) => state.userStatus
  );
  const dispatch = useDispatch();
  const buttonsHandlers = [
    () => {
      dispatch(userLogin());
      setUserLoginPanel({
        type: "login",
        state: !userLoginPanel.state
      });
    },
    () => setUserLoginPanel({
      type: "register",
      state: !userLoginPanel.state
    }),
    () => {
      console.log("LOG OUT" /* LOGOUT */);
      dispatch(userLogin());
    }
  ];
  const buttons = buttonsPanel(userStatus, dispatch, buttonsHandlers);
  const formLoginFields = [
    {
      label: "email",
      inputType: "email"
    },
    {
      label: "password",
      inputType: "password"
    }
  ];
  const formRegisterFields = [
    {
      label: "email",
      inputType: "email"
    },
    {
      label: "password",
      inputType: "password"
    },
    {
      label: "age",
      inputType: "number"
    }
  ];
  return /* @__PURE__ */ jsx11(Fragment9, { children: /* @__PURE__ */ jsxs3(ModalContentProvider, { children: [
    /* @__PURE__ */ jsx11(Menu, { children: /* @__PURE__ */ jsxs3(
      Flex,
      {
        minWidth: "max-content",
        alignItems: "center",
        justifyContent: "right",
        gap: "4",
        children: [
          /* @__PURE__ */ jsx11(
            UserLoginPanel,
            {
              userModalType: userLoginPanel.state ? userLoginPanel : registerPanel,
              formFields: userLoginPanel.type === "login" ? formLoginFields : formRegisterFields
            }
          ),
          buttons.map(
            (_a, i) => {
              var _b = _a, {
                text,
                shouldDisplay,
                onClick,
                hasUserName,
                commonStyles: commonStyles2
              } = _b, rest = __objRest(_b, [
                "text",
                "shouldDisplay",
                "onClick",
                "hasUserName",
                "commonStyles"
              ]);
              return shouldDisplay && /* @__PURE__ */ jsxs3(
                Button3,
                __spreadProps(__spreadValues(__spreadValues({}, rest), commonStyles2), {
                  onClick: () => onClick[i](),
                  children: [
                    hasUserName && (userName == null ? void 0 : userName.toUpperCase()),
                    text
                  ]
                }),
                text
              );
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx11(Footer, {})
  ] }) });
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
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
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
}) => /* @__PURE__ */ jsx12(Provider, { store, children: /* @__PURE__ */ jsx12(ChakraProvider, { children: /* @__PURE__ */ jsxs4(Container, { children: [
  /* @__PURE__ */ jsxs4(Title, { children: [
    "Title: ",
    title
  ] }),
  /* @__PURE__ */ jsx12(MainMenu, {}),
  children
] }) }) });
export {
  MainMenuPanel
};
