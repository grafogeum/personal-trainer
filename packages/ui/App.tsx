import { ChakraProvider } from "@chakra-ui/react";

export function App() {
	// 2. Wrap ChakraProvider at the root of your app
	return (
		<ChakraProvider>
			<App />
		</ChakraProvider>
	);
}
