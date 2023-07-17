import { useRef, useState } from "react";
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

type UserModalType = {
	type: "login" | "register";
	state: boolean;
};

export const MainMenu = () => {
	const [userLoginPanel, setUserLoginPanel] = useState<UserModalType>({
		type: "login",
		state: false,
	});
	const [registerPanel, setRegisterPanel] = useState<UserModalType>({
		type: "register",
		state: false,
	});
	const { userStatus, userName } = useSelector(
		(state: RootState) => state.userStatus
	);
	const dispatch = useDispatch();
	const buttonsHandlers = [
		() => {
			dispatch(userLogin());
			setUserLoginPanel({
				type: "login",
				state: !userLoginPanel.state,
			});
		},
		() =>
			setUserLoginPanel({
				type: "register",
				state: !userLoginPanel.state,
			}),
		() => {
			console.log(UserStatusStatus.LOGOUT);
			dispatch(userLogin());
		},
	];
	const buttons = buttonsPanel(userStatus, dispatch, buttonsHandlers);

	const formLoginFields = [
		{
			label: "email",
			inputType: "email",
		},
		{
			label: "password",
			inputType: "password",
		},
	] as {
		label: "email" | "password";
		inputType: "email" | "password";
	}[];

	const formRegisterFields = [
		{
			label: "email",
			inputType: "email",
		},
		{
			label: "password",
			inputType: "password",
		},
		{
			label: "age",
			inputType: "number",
		},
	] as {
		label: "email" | "password" | "age";
		inputType: "email" | "password" | "number";
	}[];

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
							userModalType={
								userLoginPanel.state ? userLoginPanel : registerPanel
							}
							formFields={
								userLoginPanel.type === "login"
									? formLoginFields
									: formRegisterFields
							}
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
										onClick={() => onClick[i]()}
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
