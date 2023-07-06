import { Fragment, useContext, useEffect, useState } from "react";
import { Notifications } from "../../Atoms/Notifications/Notifications";
import ModalContext from "../Modal/state/ModalContext";

export const Footer = () => {
	const {
		state: { errorMessages },
		dispatch,
	} = useContext(ModalContext);

	const [inputText, inputTextSet] = useState([]);

	useEffect(() => {
		inputTextSet(Object.values(errorMessages));
	}, [errorMessages]);

	return (
		<>
			Hello Footer
			{/* <Notifications notifText={"Hello Footer"} /> */}
			{inputText.map((notification: string) => (
				<Fragment key={notification}>
					<Notifications notifText={notification} />
				</Fragment>
			))}
		</>
	);
};
