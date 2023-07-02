import { FormLabel } from "@chakra-ui/react";
import { useContext } from "react";
import ModalContext from "./ModalContext";

export const Label = ({ labelProps }: { labelProps?: string }) => {
	const { multipleLabels } = useContext(ModalContext);
	return (
		<>
			{labelProps ? (
				<FormLabel
					sx={{ position: "relative", margin: "0.25rem " }}
					requiredIndicator={
						<span
							style={{
								color: "#D6BCFA",
								position: "absolute",
								top: "-5px",
								paddingLeft: "5px",
							}}
						>
							＊
						</span>
					}
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
