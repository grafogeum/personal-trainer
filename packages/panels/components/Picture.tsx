import styled from "@emotion/styled";
import { useDrag } from "react-dnd";
import { DragType } from "../../enums/dragTypes";
import { PictureType } from "types";

interface ImageStyledProps {
	isDragging: boolean | (() => void);
	canDrag?: boolean;
	url: string;
}

const ImageStyled = styled.div<ImageStyledProps>`
	width: 100px;
	height: 100px;
	position: relative;
	display: block;
	border: ${({ isDragging }) =>
		isDragging ? "1px solid #fc44c8" : "1px solid black"};
	opacity: ${({ canDrag }) => (canDrag ? 1 : 0.5)};
	background: ${({ url }) => `url(${url}) no-repeat center center `};
	background-size: cover;
	z-index: 0;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		background-color: #c4e653;
		transition: opacity 0.2s ease-in-out;
		z-index: 1;
		opacity: 0;
	}

	&:hover::before {
		opacity: 0.5;
	}
`;

export const Picture = ({
	url,
	name,
	id,
}: PictureType & {
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
