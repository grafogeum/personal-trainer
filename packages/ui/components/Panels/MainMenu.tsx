import { useState } from "react";
import { Menu, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { userLogin } from "../../store/userInfoSlice";
import { buttonsPanel } from "./LoginButtons";
import { UserStatusStatus } from "../../const/const";
import { InitialFocus } from "./Modal/Modal";
import { ModalContentProvider } from "./Modal/state/ModalContentProvider";
import { Footer } from "./Footer/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainMenu = () => {
	const [registerInit, setRegisterInit] = useState(false);
	const { userStatus, userName } = useSelector(
		(state: RootState) => state.userStatus
	);
	const dispatch = useDispatch();
	const buttonsHandlers = [
		() => dispatch(userLogin()),
		() => setRegisterInit(!registerInit),
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
						<InitialFocus registerInit={registerInit} />

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
