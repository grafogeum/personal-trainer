import { useState } from "react";
import { Menu, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { userLogin } from "../../store/userInfoSlice";
import { buttonsPanel } from "./LoginButtons";
import { UserStatusStatus } from "../../const/const";
import { InitialFocus } from "./Modal";

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
		<Menu>
			<Flex
				minWidth="max-content"
				alignItems="center"
				justifyContent="right"
				gap="4"
			>
				<InitialFocus registerInit={registerInit} />

				{buttons.map(
					({ text, render, onClick, hasUserName, commonStyles, ...rest }, i) =>
						render && (
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
								{` `}
								{text}
							</Button>
						)
				)}
			</Flex>
		</Menu>
	);
};
