import styled from "@emotion/styled";
import { GoalList } from "../../data/GoalList";
import { Goal } from "./Goal";
import { Box } from "@chakra-ui/react";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-direction: column;
	justify-content: center;
	padding: 0;
	margin: 0;
`;

export const TaskListDnD = () => {
	return (
		<Box>
			{GoalList.map(({ id, name, url }) => (
				<div key={id}>
					<Goal {...{ name, url, id }} />
				</div>
			))}
		</Box>
	);
};
