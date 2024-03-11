// /** @format */

// import React, { useState } from "react";
// import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
// import MapView, { Marker } from "react-native-maps";

// const YourMapComponent = () => {
// 	const initialRegion = {
// 		latitude: 37.78825,
// 		longitude: -122.4324,
// 		latitudeDelta: 0.0922,
// 		longitudeDelta: 0.0421,
// 	};

// 	const [location, setLocation] = useState({
// 		latitude: initialRegion.latitude,
// 		longitude: initialRegion.longitude,
// 	});
// 	const [manualLocation, setManualLocation] = useState("");

// 	const handleManualLocationInput = (value: string) => {
// 		setManualLocation(value);
// 	};

// 	const handleSelectLocation = () => {
// 		// Xử lý logic khi người dùng chọn địa điểm từ ô input
// 		// Trong ví dụ này, mình sẽ sử dụng một dịch vụ lấy vị trí từ địa chỉ (geocoding)
// 		// Đây chỉ là ví dụ, bạn cần sử dụng một dịch vụ thực tế để lấy vị trí từ địa chỉ
// 		// Sau đó, cập nhật vị trí trên bản đồ
// 		console.log("Selected Manual Location:", manualLocation);
// 	};

// 	return (
// 		<View style={styles.container}>
// 			<MapView
// 				style={styles.map}
// 				initialRegion={initialRegion}
// 				region={{
// 					latitude: location.latitude,
// 					longitude: location.longitude,
// 					latitudeDelta: 0.0922,
// 					longitudeDelta: 0.0421,
// 				}}
// 				onPress={(event) => {
// 					const { latitude, longitude } =
// 						event.nativeEvent.coordinate;
// 					setLocation({ latitude, longitude });
// 				}}
// 			>
// 				<Marker
// 					coordinate={location}
// 					title="Selected Location"
// 				/>
// 			</MapView>
// 			<View style={styles.inputContainer}>
// 				<View
// 					style={{
// 						padding: 5,
// 						borderBottomColor: "ccc",
// 						borderBottomWidth: 0.5,
// 					}}
// 				>
// 					<TextInput
// 						style={styles.input}
// 						placeholder="Nhập điểm đón"
// 						value={manualLocation}
// 						onChangeText={handleManualLocationInput}
// 					/>
// 				</View>
// 				<View style={{ padding: 5 }}>
// 					<TextInput
// 						style={styles.input}
// 						placeholder="Nhập điểm đến"
// 						value={manualLocation}
// 						onChangeText={handleManualLocationInput}
// 					/>
// 				</View>
// 			</View>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: "center",
// 	},
// 	map: {
// 		...StyleSheet.absoluteFillObject,
// 	},
// 	inputContainer: {
// 		flexDirection: "column",
// 		position: "absolute",
// 		top: 16,
// 		backgroundColor: "#fff",
// 		borderRadius: 8,
// 		width: Dimensions.get("window").width - 32,
// 		padding: 8,
// 	},
// 	input: {},
// });

// export default YourMapComponent;
