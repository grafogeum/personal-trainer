import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	FormLabel,
	Input,
	useDisclosure,
} from "@chakra-ui/react";
import { SetStateAction, useEffect, useReducer, useRef, useState } from "react";
import { Form } from "../Atoms/Form";
import { ModalContentProvider } from "./Modal/ModalContentProvider";
import { ModalPanel } from "./Modal/ModalPanel";
import * as yup from "yup";
import { ModalReducer, ModalActionTypes } from "./Modal/ModalReducer";

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

export const InitialFocus = ({ registerInit }: { registerInit: boolean }) => {
	const [initialized, setInitialized] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [formErrors, setFormErrors] = useState<FormErrors>({
		email: "",
		password: "",
	});

	interface State {
		errorMessages: {
			inputType: null;
		};
	}

	const initialState = {
		errorMessages: { inputType: null },
	};

	const [state, dispatch] = useReducer(ModalReducer, initialState as State);

	useEffect(() => {
		initialized ? onOpen() : setInitialized(true);
	}, [registerInit, registerInit]);

	const initialRef = useRef(null);
	const finalRef = useRef(null);

	const userEmailRef = useRef<HTMLInputElement>(null);
	const userPasswordRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!userEmailRef.current || !userPasswordRef.current) {
			return;
		}
		const formData = {
			email: userEmailRef.current.value,
			password: userPasswordRef.current.value,
		};

		try {
			await personSchema.validate(formData, { abortEarly: false });
			setFormValues(formData);

			dispatch({
				type: ModalActionTypes.SET_ERROR_MESSAGES,
				payload: {
					email: "",
					password: "",
				},
			});
		} catch (error) {
			if (error instanceof yup.ValidationError) {
				const errors: FormErrors = {};
				error.inner.forEach((err: yup.ValidationError) => {
					errors[err.path as keyof FormErrors] = err.message;
				});
				setFormErrors(errors);
				dispatch({
					type: ModalActionTypes.SET_ERROR_MESSAGES,
					payload: errors,
				});
			}
		}

		try {
			setFormValues(formData);
		} catch (error: any) {}
	};

	useEffect(() => {
		// console.log("formErrors", formErrors);
		// console.log("formValues", formValues);
	}, [formErrors, formValues]);

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
					<ModalContentProvider state={state} dispatch={dispatch}>
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
					</ModalContentProvider>
				</ModalContent>
			</Modal>
		</>
	);
};
