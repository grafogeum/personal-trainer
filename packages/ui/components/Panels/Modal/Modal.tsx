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
import { useContext, useEffect, useRef, useState } from "react";
import { ModalActionTypes } from "./state/ModalActions";
import { ModalPanel } from "./ModalPanel";
import ModalContext from "./state/ModalContext";
import { Form } from "../../Atoms/Form";
import * as yup from "yup";
import { SetErrorMessagesAction } from "./state/ModalReducer";

type FormErrors = {
	email?: string;
	password?: string;
};

const personSchema = yup.object({
	email: yup
		.string()
		.default("mail@domain.com")
		.nullable("Email is invalid")
		.email("Email is invalid")
		.matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, "Email is invalid")
		.required("Email is required"),
	password: yup
		.string()
		.min(8, "Password is to short")
		.max(40, "Password is to long")
		.required("Password is required"),
});

interface Person extends yup.InferType<typeof personSchema> {}

const validateHelper = async (formData: Record<string, string>) => {
	await personSchema.validate(formData, { abortEarly: false });
};

export const InitialFocus = ({ registerInit }: { registerInit: boolean }) => {
	const [initialized, setInitialized] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [validationAttempt, setValidationAttempt] = useState(0);

	const {
		state: { isTyping },
		dispatch,
	} = useContext(ModalContext);

	useEffect(() => {
		initialized ? onOpen() : setInitialized(true);
	}, [registerInit, registerInit]);

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
							<ModalPanel>
								<ModalPanel.Label labelProps={"Email"} />
								<ModalPanel.Input inputType={"email"} refer={userEmailRef} />
								<ModalPanel.Label labelProps={"Password"} />
								<ModalPanel.Input
									inputType={"password"}
									refer={userPasswordRef}
								/>
							</ModalPanel>
						</ModalBody>
						<ModalFooter>
							<Button bg="green.200" mr={3}>
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
