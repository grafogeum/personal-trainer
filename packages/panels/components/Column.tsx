import { useState } from "react";
import { Goal } from "./Goal";
import { GoalList } from "../../data/GoalList";
import { DragType } from "../../enums/dragTypes";
import { GoalType } from "types";
import styled from "@emotion/styled";
import { useDrop } from "react-dnd";

const ColumnStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	align-items: start;
	border: 1px solid #000;
`;

export const Column = () => {
	const [board, setBoard] = useState<GoalType[]>([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: DragType.IMAGE,
		drop: (item: GoalType) =>
			setBoard((board) => [...board, GoalList[item.id - 1]]),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	return (
		<ColumnStyled ref={drop}>
			{board.map(
				({ id, name, url }: { id: number; url: string; name: string }) => (
					<div key={id}>
						<Goal {...{ url, name, id }} />
					</div>
				)
			)}
		</ColumnStyled>
	);
};
