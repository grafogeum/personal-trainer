import { FormLabel } from "@chakra-ui/react";
import { useContext } from "react";
import ModalContext from "./state/ModalContext";

const LabelStyle = {
	color: "#D6BCFA",
	position: "absolute",
	top: "-5px",
	paddingLeft: "5px",
} as React.CSSProperties;

export const Label = ({ labelProps }: { labelProps?: string }) => {
	const { multipleLabels } = useContext(ModalContext);
	return (
		<>
			{labelProps ? (
				<FormLabel
					sx={{ position: "relative", margin: "0.25rem " }}
					requiredIndicator={<span style={LabelStyle}>＊</span>}
				>
					{labelProps}
				</FormLabel>
			) : (
				multipleLabels.map((label) => (
					<FormLabel key={label}>{label}</FormLabel>
				))
			)}
		</>
	);
};
