/** @format */

import { StatusBar } from "react-native";

export default function StatusBarComponent(prop: any) {
	return (
		<StatusBar
			{...prop}
			barStyle="light-content"
			backgroundColor="#3bd0c1"
		/>
	);
}
