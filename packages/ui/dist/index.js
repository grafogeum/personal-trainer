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

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  MainMenuPanel: () => MainMenuPanel
});
module.exports = __toCommonJS(ui_exports);

// layout/MainMenuPanel.tsx
var import_react15 = require("@chakra-ui/react");
var import_styled = __toESM(require("@emotion/styled"));

// components/Panels/MainMenu.tsx
var import_react13 = require("react");
var import_react14 = require("@chakra-ui/react");
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
var import_react8 = require("@chakra-ui/react");
var import_react9 = require("react");

// components/Panels/Modal/ModalLabel.tsx
var import_react3 = require("@chakra-ui/react");
var import_react4 = require("react");

// components/Panels/Modal/state/ModalContext.ts
var import_react2 = require("react");
var ModalContext = (0, import_react2.createContext)({
  state: {
    isTyping: false,
    errorMessages: {},
    test: "empty String"
  },
  dispatch: (arg) => {
  }
});
var ModalContext_default = ModalContext;

// components/Panels/Modal/ModalLabel.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var LabelStyle = {
  color: "#D6BCFA",
  position: "absolute",
  top: "-5px",
  paddingLeft: "5px"
};
var Label = ({ labelProps }) => {
  const { multipleLabels } = (0, import_react4.useContext)(ModalContext_default);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: labelProps ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react3.FormLabel,
    {
      sx: { position: "relative", margin: "0.25rem " },
      requiredIndicator: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: LabelStyle, children: "\uFF0A" }),
      children: labelProps
    }
  ) : multipleLabels.map((label) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.FormLabel, { children: label }, label)) });
};

// components/Panels/Modal/ModalInput.tsx
var import_react5 = require("@chakra-ui/react");
var import_react6 = require("react");
var import_usehooks_ts = require("usehooks-ts");
var import_jsx_runtime4 = require("react/jsx-runtime");
var FormInput = ({
  inputType = "",
  panelName = "",
  refer
}) => {
  const {
    state: { errorMessages },
    dispatch
  } = (0, import_react6.useContext)(ModalContext_default);
  const errorText = inputType && inputType in errorMessages ? errorMessages[inputType] : "";
  const [inputField, setInputField] = (0, import_usehooks_ts.useLocalStorage)(panelName, {
    [inputType]: ""
  });
  (0, import_react6.useEffect)(() => {
    console.log("panelNameINPUT", panelName);
  }, []);
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
  (0, import_react6.useEffect)(() => {
    const timer = setTimeout(() => {
      dispatch(isTypingDispatch);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputField]);
  (0, import_react6.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_react5.Input,
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
    errorMessages && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Text, { color: "red.600", children: errorText })
  ] });
};

// components/Panels/Modal/ModalPanel.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var ModalPanel = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children });
ModalPanel.Label = Label;
ModalPanel.Input = FormInput;

// components/Atoms/Form.tsx
var import_react7 = require("@chakra-ui/react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Form = ({
  children,
  onSubmit
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("form", { onSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.FormControl, { mt: 4, isRequired: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Input, { type: "submit" })
  ] });
};

// components/Panels/Modal/Modal.tsx
var yup = __toESM(require("yup"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var personSchema = yup.object({
  email: yup.string().default("mail@domain.com").nullable("Email is invalid").email("Email is invalid").matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, "Email is invalid").required("Email is required"),
  password: yup.string().min(8, "Password is to short").max(40, "Password is to long").required("Password is required")
});
var validateHelper = (formData) => __async(void 0, null, function* () {
  yield personSchema.validate(formData, { abortEarly: false });
});
var InitialFocus = ({ registerInit }) => {
  var _a, _b, _c, _d;
  const [initialized, setInitialized] = (0, import_react9.useState)(false);
  const { isOpen, onOpen, onClose } = (0, import_react8.useDisclosure)();
  const [validationAttempt, setValidationAttempt] = (0, import_react9.useState)(0);
  const {
    state: { isTyping },
    dispatch
  } = (0, import_react9.useContext)(ModalContext_default);
  (0, import_react9.useEffect)(() => {
    initialized ? onOpen() : setInitialized(true);
  }, [registerInit, registerInit]);
  const initialRef = (0, import_react9.useRef)(null);
  const finalRef = (0, import_react9.useRef)(null);
  const userEmailRef = (0, import_react9.useRef)(null);
  const userPasswordRef = (0, import_react9.useRef)(null);
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
      if (error instanceof yup.ValidationError) {
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
  (0, import_react9.useEffect)(() => {
    validationAttempt > 0 && validateAndDispatch(formData);
  }, [isTyping, validationAttempt]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_react8.Modal,
    {
      initialFocusRef: initialRef,
      finalFocusRef: finalRef,
      isOpen,
      onClose,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.ModalOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_react8.ModalContent,
          {
            backgroundColor: "gray.800",
            color: "white",
            borderRadius: "md",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.ModalHeader, { color: "purple.200", children: "Create your account" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.ModalCloseButton, {}),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Form, { onSubmit: handleSubmit, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.ModalBody, { pb: 6, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(ModalPanel, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ModalPanel.Label, { labelProps: "Email" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    ModalPanel.Input,
                    {
                      panelName: "registration",
                      inputType: "email",
                      refer: userEmailRef
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ModalPanel.Label, { labelProps: "Password" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    ModalPanel.Input,
                    {
                      panelName: "registration",
                      inputType: "password",
                      refer: userPasswordRef
                    }
                  )
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react8.ModalFooter, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.Button, { bg: "green.200", mr: 3, children: "Save" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.Button, { onClick: onClose, children: "Cancel" })
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
var import_react10 = require("react");

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
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  const [state, dispatch] = (0, import_react10.useReducer)(ModalReducer, initialState2);
  const modalValue = (0, import_react10.useMemo)(
    () => ({
      state,
      dispatch
    }),
    [state, dispatch]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ModalContext_default.Provider, { value: modalValue, children });
};

// components/Panels/Footer/Footer.tsx
var import_react12 = require("react");

// components/Atoms/Notifications/Notifications.tsx
var import_react11 = require("react");
var import_react_toastify = require("react-toastify");
var import_ReactToastify = require("react-toastify/dist/ReactToastify.css");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Notifications = ({ notifText }) => {
  if (!notifText)
    return null;
  notifText && (notifText = notifText.trim().toLocaleUpperCase());
  (0, import_react11.useEffect)(() => {
    let timeoutId = null;
    const notify = () => notifText && (0, import_react_toastify.toast)(`${notifText}`, {
      position: import_react_toastify.toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar"
    });
    timeoutId = setTimeout(notify, 400);
    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [notifText]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_toastify.ToastContainer, { theme: "dark" }) });
};

// components/Panels/Footer/Footer.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Footer = () => {
  const {
    state: { errorMessages },
    dispatch
  } = (0, import_react12.useContext)(ModalContext_default);
  const [inputText, inputTextSet] = (0, import_react12.useState)([]);
  (0, import_react12.useEffect)(() => {
    inputTextSet(Object.values(errorMessages));
  }, [errorMessages]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    "Hello Footer",
    inputText.map((notification) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Notifications, { notifText: notification }) }, notification))
  ] });
};

// components/Panels/MainMenu.tsx
var import_ReactToastify2 = require("react-toastify/dist/ReactToastify.css");
var import_jsx_runtime11 = require("react/jsx-runtime");
var MainMenu = () => {
  const [registerInit, setRegisterInit] = (0, import_react13.useState)(false);
  const { userStatus, userName } = (0, import_react_redux.useSelector)(
    (state) => state.userStatus
  );
  const dispatch = (0, import_react_redux.useDispatch)();
  const buttonsHandlers = [
    () => dispatch(userLogin()),
    () => setRegisterInit(!registerInit),
    () => {
      console.log("LOG OUT" /* LOGOUT */);
      dispatch(userLogin());
    }
  ];
  const buttons = buttonsPanel(userStatus, dispatch, buttonsHandlers);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(ModalContentProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react14.Menu, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_react14.Flex,
      {
        minWidth: "max-content",
        alignItems: "center",
        justifyContent: "right",
        gap: "4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(InitialFocus, { registerInit }),
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
              return shouldDisplay && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                import_react14.Button,
                __spreadProps(__spreadValues(__spreadValues({}, rest), commonStyles2), {
                  onClick: () => {
                    if (Array.isArray(onClick)) {
                      onClick[i]();
                    }
                  },
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
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Footer, {})
  ] }) });
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
var import_jsx_runtime12 = require("react/jsx-runtime");
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
}) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_redux2.Provider, { store, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react15.ChakraProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Container, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Title, { children: [
    "Title: ",
    title
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MainMenu, {}),
  children
] }) }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainMenuPanel
});
