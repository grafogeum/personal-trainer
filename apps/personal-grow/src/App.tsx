import { MainBoard } from "panels";
import { MainMenuPanel } from "ui";

const App = () => {
	return (
		<>
			<MainMenuPanel title="Main Menu">
				<MainBoard />
			</MainMenuPanel>
		</>
	);
};

export default App;
