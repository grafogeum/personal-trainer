import { useState } from "react";
import { Menu, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { userLogin } from "../../store/userInfoSlice";
import { buttonsPanel } from "./LoginButtons";
import { UserStatusStatus } from "../../const/const";
import { UserLoginPanel } from "./Modal/Modal";
import { ModalContentProvider } from "./Modal/state/ModalContentProvider";
import { Footer } from "./Footer/Footer";

// type ModalType = {
// 	loginModal: boolean;
// 	registerModal: boolean;
// 	kind: string;
// };

// export interface LoginModalAction {
// 	type: "login";
// 	loginModal: true;
// 	registerModal: false;
// }
// export interface RegisterModalAction {
// 	type: "register";
// 	loginModal: false;
// 	registerModal: true;
// }

// type Action = LoginModalAction | RegisterModalAction;

// const modalTypeReducer = (state: ModalType, action: Action) => {
// 	switch (action.type) {
// 		case "login":
// 			return {
// 				loginModal: true,
// 				registerModal: false,
// 				kind: "login",
// 			};
// 		case "register":
// 			return {
// 				loginModal: false,
// 				registerModal: true,
// 				kind: "register",
// 			};
// 	}
// };

type UserLoginType = {
	type: "login" | "register";
	state: boolean;
};

export const MainMenu = () => {
	const [userLoginType, setUserLoginType] = useState<UserLoginType>({
		type: "login",
		state: false,
	});
	const [registerInit, setRegisterInit] = useState<UserLoginType>({
		type: "register",
		state: false,
	});
	// const [userLoginType, setUserLoginType] = useState(false);
	// const [loginInit, setLoginInit] = useState(false);
	const { userStatus, userName } = useSelector(
		(state: RootState) => state.userStatus
	);
	const dispatch = useDispatch();
	const buttonsHandlers = [
		() => {
			dispatch(userLogin());
			setUserLoginType({
				type: "login",
				state: !userLoginType.state,
			});
		},
		() =>
			setRegisterInit({
				type: "register",
				state: !registerInit.state,
			}),
		() => {
			console.log(UserStatusStatus.LOGOUT);
			dispatch(userLogin());
		},
	];
	const buttons = buttonsPanel(userStatus, dispatch, buttonsHandlers);

	return (
		<>
			<ModalContentProvider>
				<Menu>
					<Flex
						minWidth="max-content"
						alignItems="center"
						justifyContent="right"
						gap="4"
					>
						<UserLoginPanel
							userLoginType={userLoginType.state ? userLoginType : registerInit}
						/>

						{buttons.map(
							(
								{
									text,
									shouldDisplay,
									onClick,
									hasUserName,
									commonStyles,
									...rest
								},
								i
							) =>
								shouldDisplay && (
									<Button
										key={text}
										{...rest}
										{...commonStyles}
										onClick={() => {
											if (Array.isArray(onClick)) {
												onClick[i]();
											}
										}}
									>
										{hasUserName && userName?.toUpperCase()}
										{text}
									</Button>
								)
						)}
					</Flex>
				</Menu>
				<Footer />
			</ModalContentProvider>
		</>
	);
};
