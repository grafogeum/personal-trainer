import styled from "@emotion/styled";
import { useDrag } from "react-dnd";
import { DragType } from "../../enums/dragTypes";
import { GoalType } from "types";

interface ImageStyledProps {
	isDragging: boolean | (() => void);
	canDrag?: boolean;
	url: string;
}

const ImageStyled = styled.div<ImageStyledProps>`
	width: 100px;
	height: 100px;
	position: relative;
	display: flex;
	border: ${({ isDragging }) =>
		isDragging ? "1px solid #fc44c8" : "1px solid black"};
	opacity: ${({ canDrag }) => (canDrag ? 1 : 0.5)};
	background: ${({ url }) => `url(${url}) no-repeat center center `};
	background-size: cover;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		background-color: #c4e653;
		transition: opacity 0.2s ease-in-out;
		opacity: 0;
	}

	&:hover::before {
		opacity: 0.5;
	}
`;

export const Goal = ({
	url,
	name,
	id,
}: GoalType & {
	isDragging?: boolean;
}) => {
	const [{ isDragging, canDrag }, drag] = useDrag(() => ({
		type: DragType.IMAGE,
		item: { id, name },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
			canDrag: monitor.canDrag(),
		}),
	}));
	return (
		<ImageStyled
			isDragging={isDragging}
			// isDragging={isDragging && console.log(name)}
			canDrag={canDrag}
			ref={drag}
			url={url}
		/>
	);
};
