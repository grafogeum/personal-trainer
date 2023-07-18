import { FlowPlanner } from "panels";
import { MainMenuPanel } from "ui";

const App = () => {
	return (
		<>
			<MainMenuPanel title="Main Menu">
				<FlowPlanner />
			</MainMenuPanel>
		</>
	);
};

export default App;
