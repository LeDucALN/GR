/** @format */
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home";

const AuthNavigator = () => {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={HomeScreen} />
		</Drawer.Navigator>
	);
};

export default AuthNavigator;
