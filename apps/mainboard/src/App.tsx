import { MainMenuPanel } from "ui";
import { MainBoard } from "panels";
import { FlowPlanner } from "panels";

import React from "react";

const MenuNavigation = [
	{ path: "/planner", component: <MainBoard /> },
	{ path: "/me", component: <FlowPlanner /> },
	{ path: "/credits", component: <>Credits</> },
	{ path: "/about", component: <>About</> },
];

export default function Page() {
	return (
		<>
			<MainMenuPanel
				title="MainBoard"
				menuLinks={MenuNavigation}
			></MainMenuPanel>
		</>
	);
}
