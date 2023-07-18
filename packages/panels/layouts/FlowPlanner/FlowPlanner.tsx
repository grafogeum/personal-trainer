import { useCallback } from "react";
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	Edge,
	BackgroundVariant,
	BackgroundProps,
} from "reactflow";
import "reactflow/dist/style.css";

import defaultNodes from "./DefaultNodes";

import defaultEdges from "./DefaultEdges";

type EdgeParamsType = typeof addEdge extends (
	params: infer P,
	edges: Edge[]
) => Edge[]
	? P
	: never;

const initialNodes = [
	{ id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
	{ id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export const FlowPlanner = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params: EdgeParamsType) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<div style={{ width: "100vw", height: "90vh" }}>
			<ReactFlow
				// nodes={nodes}
				// edges={edges}
				defaultNodes={defaultNodes}
				defaultEdges={defaultEdges}
				fitView
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				<Controls />
				<MiniMap />
				<Background
					id="1"
					gap={10}
					color="#323232"
					variant={BackgroundVariant.Lines}
				/>
				<Background
					id="2"
					gap={100}
					offset={1}
					color="#f1f1f1"
					variant={BackgroundVariant.Lines}
				/>
			</ReactFlow>
		</div>
	);
};
