import { JSXElementConstructor, ReactElement } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { Action } from "redux";
import { UserStatusStatus } from "../../const/const";
import { User } from "../Icons/User";

const commonStyles = {
	bg: "purple.200",
	colorScheme: "purple.200",
	variant: "outline",
	color: "#ffffff",
	_hover: { bg: "purple.100" },
	minW: "140px",
	minH: "12",
};

type Button = {
	text: string;
	onClick: (() => void)[];
	as?: React.ElementType<ButtonProps>;
	rightIcon?: ButtonProps["rightIcon"];
	hasUserName?: boolean;
	commonStyles: ButtonProps;
	render: boolean;
};

export const buttonsPanel = (
	userStatus: boolean,
	dispatch: (action: Action) => void,
	onClick: (() => void)[]
): Button[] => [
	{
		text: userStatus ? "" : UserStatusStatus.LOGIN,
		onClick,
		as: Button,
		rightIcon: userStatus ? <User w={8} h={8} color="purple.700" /> : undefined,
		commonStyles,
		hasUserName: userStatus ? true : false,
		render: true,
	},
	{
		text: UserStatusStatus.REGISTER,
		onClick,
		commonStyles,
		render: !userStatus,
	},
	{
		text: UserStatusStatus.LOGOUT,
		onClick,
		commonStyles,
		render: userStatus,
	},
];
