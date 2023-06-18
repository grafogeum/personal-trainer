import { MainMenuPanel } from "ui";
import { MainBoard } from "panels";

export default function Page() {
	return (
		<>
			<MainMenuPanel title="Main Menu">
				<MainBoard />
			</MainMenuPanel>
		</>
	);
}
