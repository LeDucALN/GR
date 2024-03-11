// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import * as Location from 'expo-location';

// const Test: React.FC = () => {
//   const [location, setLocation] = useState<Location.LocationObject | null>(null);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try{
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//           Alert.alert('Permission to access location was denied');
//           return;
//         }
//         let userLocation = await Location.getCurrentPositionAsync({});
//         setLocation(userLocation);
//       }
//       catch(error){
//         console.log(error);
//       }
//     };
//     fetchLocation();
//   }, []);

  
//   return (
//     <View>
//       {location ? (
//         <Text>
//           Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
//         </Text>
//       ) : (
//         <View>
//           <Text>Loading...</Text>
         
//         </View>
//       )}
//     </View>
//   );
// };

// export default Test;
