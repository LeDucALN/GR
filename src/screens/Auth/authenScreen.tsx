/** @format */

import { useState, useRef } from "react";
import {
	TextInput,
	Modal,
	Dimensions,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { Image, Button } from "@rneui/themed";
import { auth } from '../../../firebase'

export default function AuthenScreen({ navigation }: any) {
	const [modalVisible, setModalVisible] = useState(false);
	const textInputRef = useRef<TextInput>(null);
	const hideModal = () => {
		setModalVisible(false);
	};
	const [isPress, setIsPress] = useState(false);

	const handlePress = () => {
		textInputRef.current?.blur();
	};

	const handleOpenModal = () => {
		setModalVisible(true);
		textInputRef.current?.blur();
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				<View>
					<Image
						source={{
							uri: "https://special.vietnamplus.vn/wp-content/uploads/2021/03/taxicover3-1474267658-22.jpg",
						}}
						style={{ width: "100%", aspectRatio: 1.8 }}
					/>
				</View>
				<View style={{ margin: 20 }}>
					<Text>Sử dụng số điện thoại của bạn</Text>
					<Text>
						để{" "}
						<Text style={{ fontWeight: "bold" }}>
							đăng nhập/đăng ký
						</Text>{" "}
						tài khoản
					</Text>
				</View>
				<View
					style={{
						marginHorizontal: 20,
						flexDirection: "row",
						borderWidth: 1,
						borderRadius: 12,
						borderColor: "#08beeb",
					}}
				>
					<View
						style={{
							padding: 8,
							backgroundColor: "#c0bbbb",
							borderRadius: 11,
							borderTopRightRadius: 0,
							borderBottomRightRadius: 0,
							width: 100,
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							onPress={handleOpenModal}
							onPressIn={() => setIsPress(true)}
							onPressOut={() => setIsPress(false)}
						>
							<View
								style={{
									padding: 2,
									flexDirection: "row",
									alignItems: "center",
									gap: 3,
									backgroundColor: isPress
										? "#ce6b36"
										: undefined,
								}}
							>
								<Image
									source={{
										uri: "https://cdn-icons-png.flaticon.com/512/10888/10888389.png",
									}}
									style={{ width: 30, height: 30 }}
								/>
								<Text style={{ fontWeight: "bold" }}>+84</Text>
								<Image
									source={{
										uri: "https://cdn-icons-png.flaticon.com/512/54/54470.png",
									}}
									style={{ width: 15, height: 15 }}
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 10, flex: 1, alignSelf: "center" }}>
						<TextInput
							placeholder="Số điện thoại của bạn"
							keyboardType="numeric"
							style={{ fontWeight: "bold" }}
							ref={textInputRef}
						/>
					</View>
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
						containerStyle={{ borderRadius: 5, marginBottom: 20 }}
						buttonStyle={{ backgroundColor: "#43abc6" }}
						onPress={() => navigation.navigate("AuthenByPassword")}
					/>
					<Text style={{ textAlign: "center" }}>
						Bằng việc nhấn nút tiếp tục, bạn đã đồng ý với các{" "}
						<Text style={{ fontWeight: "bold" }}>
							điều khoản dịch vụ & chính sách bảo mật
						</Text>
					</Text>
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
									<Text>Your Modal Content Goes Here</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</TouchableWithoutFeedback>
				</Modal>
			</View>
		</TouchableWithoutFeedback>
	);
}

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
		height: Dimensions.get("window").height / 2,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
	},
});
