import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AuthenByOTPScreen = ({navigation}:any) => {
  const [input, setInput] = useState<string[]>(['', '', '', '', '', '']);
  const inputRef = useRef<Array<TextInput | null>>([null, null, null, null, null, null]);
  const handleInputChange = (index: number, number: string) => {
    const newInput = [...input];
    newInput[index] = number;
    setInput(newInput);

    if (number && index < input.length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  }

  return (
    <View style={{
      marginHorizontal: 16,
      marginTop: 100,
    }}>
      <View style={{
        marginBottom: 10,
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}>Xác thực mã OTP,</Text>
      </View>
      <View>
        <Text>Taxi App đã gửi cho bạn mã OTP 6 số tới số điện thoại +84962757401</Text>
      </View>
      <View  style={styles.container}>
      {input.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRef.current[index] = ref)}
          style={styles.input}
          onChangeText={(number) => handleInputChange(index, number)}
          maxLength={1}
          keyboardType="numeric"
          secureTextEntry={true}
        />
      ))}
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate("CreateInfo")}>
          <Text style={{
            fontWeight: 'bold',
          }}>Gửi lại mã OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#dacccc71'
  },
});

export default AuthenByOTPScreen;
