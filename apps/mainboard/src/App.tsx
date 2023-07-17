import { MainMenuPanel } from "ui";
import { MainBoard } from "panels";
import React from "react";

const MenuNavigation = [
	{ path: "/planner", component: <MainBoard /> },
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
