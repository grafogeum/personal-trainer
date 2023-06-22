import { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskListDnD, Column } from "../components";
import { Box } from "@chakra-ui/react";

export const MainBoard = ({
	title,
	children,
}: {
	title?: string;
	children?: ReactNode;
}) => {
	return (
		<DndProvider backend={HTML5Backend}>
			<Box display="flex" width="100%" m={2}>
				<TaskListDnD />
				<Box
					display="flex"
					width="100%"
					alignItems="center"
					justifyContent="space-between"
				>
					<Column />
					<Column />
					<Column />
					<Column />
				</Box>
			</Box>
		</DndProvider>
	);
};
