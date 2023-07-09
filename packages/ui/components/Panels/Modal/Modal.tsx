import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { ModalActionTypes } from "./state/ModalActions";
import { ModalPanel } from "./ModalPanel";
import ModalContext from "./state/ModalContext";
import { Form } from "../../Atoms/Form";
import * as yup from "yup";
import { SetErrorMessagesAction } from "./state/ModalReducer";
import { registerSchema } from "./state/Schemas";

type FormErrors = {
	email?: string;
	password?: string;
};

const validateHelper = async (formData: Record<string, string>) => {
	await registerSchema.validate(formData, { abortEarly: false });
};

export const UserLoginPanel = ({
	userLoginType,
}: {
	userLoginType: {
		type: "login" | "register";
		state: boolean;
	};
}) => {
	console.log("userLoginType", userLoginType);
	const [initialized, setInitialized] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [validationAttempt, setValidationAttempt] = useState(0);

	const {
		state: { isTyping },
		dispatch,
	} = useContext(ModalContext);

	useEffect(() => {
		initialized ? onOpen() : setInitialized(true);
	}, [userLoginType]);

	const initialRef = useRef(null);
	const finalRef = useRef(null);
	const userEmailRef = useRef<HTMLInputElement>(null);
	const userPasswordRef = useRef<HTMLInputElement>(null);
	const formData = {
		email: userEmailRef.current?.value ?? "",
		password: userPasswordRef.current?.value ?? "",
	};

	const validateAndDispatch = async (formData: Record<string, string>) => {
		const errorDispatch: SetErrorMessagesAction = {
			type: ModalActionTypes.SET_ERROR_MESSAGES,
			payload: {},
		};
		try {
			await validateHelper(formData);
			dispatch(errorDispatch);
		} catch (error) {
			if (error instanceof yup.ValidationError) {
				const errors: FormErrors = {};
				error.inner.forEach((err: yup.ValidationError) => {
					errors[err.path as keyof FormErrors] = err.message;
				});
				dispatch({
					...errorDispatch,
					payload: errors,
				});
			}
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!userEmailRef.current || !userPasswordRef.current) {
			return;
		}
		await validateAndDispatch(formData);
		setValidationAttempt((prev) => prev + 1);
	};

	useEffect(() => {
		validationAttempt > 0 && validateAndDispatch(formData);
	}, [isTyping, validationAttempt]);

	const modalData = {
		register: [
			{
				label: "Email",
				inputType: "email",
				refer: userEmailRef,
			},
			{
				label: "Password",
				inputType: "password",
				refer: userPasswordRef,
			},
		],
		login: [
			{
				label: "Email-Login",
				inputType: "email",
				refer: userEmailRef,
			},
			{
				label: "Password-Login",
				inputType: "password",
				refer: userPasswordRef,
			},
		],
	};

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent
					backgroundColor={"gray.800"}
					color={"white"}
					borderRadius={"md"}
				>
					<ModalHeader color={"purple.200"}>Create your account</ModalHeader>
					<ModalCloseButton />
					<Form onSubmit={handleSubmit}>
						<ModalBody pb={6}>
							{Object.keys(modalData).map((group) => (
								<ModalPanel key={group}>
									{group === userLoginType.type &&
										modalData[group as keyof typeof modalData].map(
											({
												label,
												inputType,
												refer,
											}: {
												label: string;
												inputType: string;
												refer: React.RefObject<HTMLInputElement>;
											}) => (
												<Fragment key={label}>
													<ModalPanel.Label labelProps={label} />
													<ModalPanel.Input
														panelName={group}
														inputType={inputType}
														refer={refer}
													/>
												</Fragment>
											)
										)}
								</ModalPanel>
							))}
						</ModalBody>
						<ModalFooter>
							<Button bg="green.200" mr={3} type="submit">
								Save
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</Form>
				</ModalContent>
			</Modal>
		</>
	);
};
