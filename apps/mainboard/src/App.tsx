import { MainMenuPanel } from "ui";
import { MainBoard } from "./layouts/MainBoard";

export default function Page() {
	return (
		<>
			<MainMenuPanel title="Main Menu">
				<MainBoard />
			</MainMenuPanel>
		</>
	);
}
