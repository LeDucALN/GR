/** @format */

import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";

interface TextInputProps {
	placeholder?: string;
}

export interface TextInputRef {
	distroyFocus: () => void;
}

const TextInputComponent = forwardRef<TextInputRef, TextInputProps>(
	({ placeholder }, ref) => {
		const [display, setDisplay] = useState<boolean>(false);
		const [value, setValue] = useState<string>("");
		const inputRef = useRef<TextInput>(null);

		useImperativeHandle(ref, () => ({
			distroyFocus,
		}));
		const handleFocus = () => {
			if (value) {
				setDisplay(true);
			}
		};

		const handleChangeText = (text: string) => {
			setValue(text);
			if (text) {
				setDisplay(true);
			} else {
				setDisplay(false);
			}
		};

		const handleBlur = () => {
			setDisplay(false);
		};

		const distroyFocus = () => {
			inputRef.current?.blur();
		};

		const handleDeleteValue = () => {
			setValue("");
			setDisplay(false);
		};

		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder={placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChangeText={handleChangeText}
					value={value}
					ref={inputRef}
				/>
				<TouchableOpacity
					onPress={handleDeleteValue}
					style={{ justifyContent: "center", width: 16 }}
				>
					<View>
						<Icon
							name="close"
							containerStyle={{
								borderRadius: 12,
								backgroundColor: "#ccc",
								display: display ? undefined : "none",
							}}
							size={16}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 4,
		borderRadius: 12,
		borderColor: "#08beeb",
		borderWidth: 1,
		width: "100%",
		justifyContent: "center",
		gap: 4,
	},
	textInput: {
		height: 40,
		width: "90%",
		fontWeight: "300",
	},
});

export default TextInputComponent;
