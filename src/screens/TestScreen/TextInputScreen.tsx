import { View, Text, TouchableWithoutFeedback } from "react-native";
import { useRef } from "react";
import TextInputComponent, {TextInputRef} from "../../components/TextInputComponent";
const TestTextInputScreen = () => {
	const textInputComponentRef = useRef<TextInputRef>(null)
	const handlePress = () => {
		textInputComponentRef.current!.distroyFocus();
	};
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={{
                flex: 1,
            }}>
				<TextInputComponent placeholder="Nhập họ và tên" ref={textInputComponentRef}/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default TestTextInputScreen;
