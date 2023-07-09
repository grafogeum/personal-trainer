import * as yup from "yup";

export const registerSchema = yup.object({
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
