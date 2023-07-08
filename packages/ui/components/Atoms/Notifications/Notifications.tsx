import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notifications = ({ notifText }: { notifText?: string }) => {
	if (!notifText) return null;

	notifText &&= notifText.trim().toLocaleUpperCase();

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null;
		const notify = () =>
			notifText &&
			toast(`${notifText}`, {
				position: toast.POSITION.BOTTOM_RIGHT,
				className: ` notif-${notifText.slice(0, 10).toLowerCase()}`,
			});

		timeoutId = setTimeout(notify, 400);

		return () => {
			timeoutId && clearTimeout(timeoutId);
		};
	}, [notifText]);

	return (
		<>
			<ToastContainer theme="dark" />
		</>
	);
};
