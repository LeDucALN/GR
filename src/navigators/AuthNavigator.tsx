/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenScreen from "../screens/Auth/authenScreen";
import AuthenByPasswordScreen from "../screens/Auth/authenByPasswordScreen";
import AuthenByOTPScreen from "../screens/Auth/authenByOTPScreen";
import CreateInfoScreen from "../screens/Auth/createInfoScreen";

const AuthNavigator = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Auth"
				component={AuthenScreen}
			/>
			<Stack.Screen
                name="AuthenByPassword"
                component={AuthenByPasswordScreen}
            />
			<Stack.Screen
                name="AuthenByOTP"
                component={AuthenByOTPScreen}
            />
			<Stack.Screen
				name="CreateInfo"
				component={CreateInfoScreen}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigator;
