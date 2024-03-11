/** @format */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./src/navigators/AuthNavigator";
import HomeNavigator from "./src/navigators/HomeNavigator";
import TestTextInputScreen from "./src/screens/TestScreen/TextInputScreen";
import TestMapScreen from "./src/screens/TestScreen/MapScreen";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<StatusBar
				barStyle="light-content"
				backgroundColor="#3bd0c1"
			/>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="HomeNavigator"
					component={AuthNavigator}
				/>
				<Stack.Screen
					name="AuthNavigator"
					component={HomeNavigator}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);	
}
