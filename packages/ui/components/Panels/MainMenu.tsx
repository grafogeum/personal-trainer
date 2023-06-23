import { Menu, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { userLogin } from "../../store/userInfoSlice";
import { buttonsPanel } from "./LoginButtons";
import { UserStatusStatus } from "../../const/const";

export const MainMenu = () => {
	const { userStatus, userName } = useSelector(
		(state: RootState) => state.userStatus
	);
	const dispatch = useDispatch();
	const buttons = buttonsPanel(userStatus, dispatch, [
		() => dispatch(userLogin()),
		() => console.log(UserStatusStatus.REGISTER),
		() => console.log(UserStatusStatus.LOGOUT),
	]);

	return (
		<Menu>
			<Flex
				minWidth="max-content"
				alignItems="center"
				justifyContent="right"
				gap="4"
			>
				{buttons.map(
					({ text, render, onClick, commonStyles, rightIcon, ...rest }, i) =>
						render && (
							<Button
								key={text}
								rightIcon={rightIcon}
								{...rest}
								{...commonStyles}
								onClick={() => {
									if (Array.isArray(onClick)) {
										onClick[i]();
									}
								}}
							>
								{text}
							</Button>
						)
				)}
			</Flex>
		</Menu>
	);
};
