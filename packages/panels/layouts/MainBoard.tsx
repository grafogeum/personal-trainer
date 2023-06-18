import { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDrop } from "../components/DragDrop";

export const MainBoard = ({
	title,
	children,
}: {
	title?: string;
	children?: ReactNode;
}) => {
	return (
		<DndProvider backend={HTML5Backend}>
			<h2>{title}</h2>
			{children}
			<DragDrop />
		</DndProvider>
	);
};
