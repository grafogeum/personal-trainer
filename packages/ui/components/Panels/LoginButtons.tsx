import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { ButtonProps } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";
import { Action } from "redux";
import { UserStatusStatus } from "../../const/const";

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
	onClick?: (() => void)[];
	as?: React.ElementType<ButtonProps>;
	rightIcon?: ReactElement<
		React.ReactNode,
		string | JSXElementConstructor<React.ReactNode>
	>;
	commonStyles: ButtonProps;
	render: boolean;
};

export const buttonsPanel = (
	userStatus: boolean,
	dispatch?: (action: Action) => void,
	onClick?: (() => void)[] | undefined
): Button[] => [
	{
		text: userStatus ? UserStatusStatus.LOGOUT : UserStatusStatus.LOGIN,
		onClick,
		as: Button,
		rightIcon: <EmailIcon w={8} h={8} color="purple.700" />,
		commonStyles,
		render: true,
	},
	{
		text: UserStatusStatus.REGISTER,
		onClick,
		commonStyles,
		render: !userStatus,
	},
	{
		text: UserStatusStatus.LOGGED,
		onClick,
		commonStyles,
		render: userStatus,
	},
];
