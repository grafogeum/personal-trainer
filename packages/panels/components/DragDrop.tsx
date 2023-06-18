import { useState } from "react";
import styled from "@emotion/styled";
import { Picture } from "./Picture";
import { PictureList } from "../../data/PictureList";
import { useDrop } from "react-dnd";
import { DragType } from "../../enums/dragTypes";
import { PictureType } from "types";

const Board = styled.div`
	width: 200px;
	height: 350px;
	border: 1px solid #000;
`;
const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const DragDrop = () => {
	const [board, setBoard] = useState<PictureType[]>([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: DragType.IMAGE,
		drop: (item: PictureType) =>
			setBoard((board) => [...board, PictureList[item.id - 1]]),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	return (
		<Container>
			<div className="pictures">
				{PictureList.map(({ id, name, url }) => (
					<div key={id}>
						<Picture {...{ name, url, id }} />
					</div>
				))}
			</div>
			<Board ref={drop}>
				{board.map(
					({ id, name, url }: { id: number; url: string; name: string }) => (
						<div key={id}>
							<Picture {...{ url, name, id }} />
						</div>
					)
				)}
			</Board>
		</Container>
	);
};
