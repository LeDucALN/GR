/** @format */
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	Modal,
	TouchableWithoutFeedback,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { useState, useRef } from "react";
import { Button } from "@rneui/themed";
import TextInputComponent, {
	TextInputRef,
} from "../../components/TextInputComponent";

const CreateInfoScreen = ({ navigation }: any) => {
	const [modalVisible, setModalVisible] = useState(false);
	const hideModal = () => {
		setModalVisible(false);
	};
	const [input, setInput] = useState<string[]>(["", "", "", "", "", ""]);
	const inputRef = useRef<Array<TextInput | null>>([
		null,
		null,
		null,
		null,
		null,
		null,
	]);
	const handleInputChange = (index: number, number: string) => {
		const newInput = [...input];
		newInput[index] = number;
		setInput(newInput);

		if (number && index < input.length - 1) {
			inputRef.current[index + 1]?.focus();
		}
	};
	const textInputComponentRef = useRef<TextInputRef>(null);
	const [hidePassword, setHidePassword] = useState(true);
	const handlePress = () => {
		textInputComponentRef.current!.distroyFocus();
	};
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View
				style={{
					marginHorizontal: 16,
					marginTop: 100,
					flex: 1,
				}}
			>
				<View
					style={{
						marginBottom: 10,
					}}
				>
					<Text
						style={{
							fontSize: 30,
							fontWeight: "bold",
						}}
					>
						Tạo thông tin tài khoản
					</Text>
				</View>
				<View>
					<Text>
						Hoàn thiện các thông tin cá nhân để tạo tài khoản và
						trải nghiệm dịch vụ của chúng tôi
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-start",
						paddingHorizontal: 16,
						marginTop: 20,
						gap: 4,
					}}
				>
					<Text style={{ fontWeight: "200" }}>Họ và tên</Text>
					<Text
						style={{
							color: "red",
						}}
					>
						*
					</Text>
				</View>
				<View>
					<TextInputComponent placeholder="Nhập họ và tên" />
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingHorizontal: 16,
						marginTop: 20,
						gap: 4,
					}}
				>
					<Text style={{ fontWeight: "200" }}>Email</Text>
					<Text style={{ fontWeight: "200" }}>
						Dùng email để bảo mật hơn
					</Text>
				</View>
				<View>
					<TextInputComponent
						placeholder="Nhập địa chỉ Email"
						ref={textInputComponentRef}
					/>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: "flex-end",
						marginBottom: 20,
						marginHorizontal: 20,
					}}
				>
					<Button
						title="Tiếp tục"
						containerStyle={{
							borderRadius: 5,
						}}
						buttonStyle={{
							backgroundColor: "#43abc6",
						}}
						onPress={() => setModalVisible(true)}
					/>
				</View>
				<Modal
					transparent
					animationType="slide"
					visible={modalVisible}
					onRequestClose={hideModal}
				>
					<TouchableWithoutFeedback onPress={hideModal}>
						<View style={styles.modalContainer}>
							<TouchableWithoutFeedback>
								<View style={styles.modalContent}>
									<View
										style={{
											marginBottom: 10,
										}}
									>
										<Text
											style={{
												fontSize: 20,
												fontWeight: "bold",
											}}
										>
											Tạo mật khẩu
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontWeight: "200",
											}}
										>
											Sử dụng mật khẩu để bảo vệ tài khoản
											và đăng nhập lại nhanh hơn
										</Text>
									</View>
									<View style={styles.containerInput}>
										{input.map((value, index) => (
											<TextInput
												key={index}
												ref={(ref) =>
													(inputRef.current[index] =
														ref)
												}
												style={styles.input}
												onChangeText={(number) =>
													handleInputChange(
														index,
														number
													)
												}
												maxLength={1}
												keyboardType="numeric"
												secureTextEntry={hidePassword}
											/>
										))}
									</View>
									<View
										style={{
											marginTop: 10,
										}}
									>
										<TouchableOpacity
											onPress={() =>
												setHidePassword(!hidePassword)
											}
										>
											<Text
												style={{
													color: "#08beeb",
												}}
											>
												Hiện mật khẩu
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</TouchableWithoutFeedback>
				</Modal>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
	},

	modalContent: {
		backgroundColor: "white",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height / 3,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
	},

	containerInput: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		marginTop: 20,
	},
	input: {
		width: 50,
		height: 60,
		borderWidth: 1,
		borderRadius: 8,
		textAlign: "center",
		fontSize: 18,
		backgroundColor: "#dacccc71",
	},
});

export default CreateInfoScreen;
