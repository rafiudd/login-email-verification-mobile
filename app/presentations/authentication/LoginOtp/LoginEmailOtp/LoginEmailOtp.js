import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import styles from './LoginEmailOtp.style';
import axios from 'axios';

const LoginEmailOTP = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log(route.params.email);
  }, []);

  const onChangeOTP = (code) => {
    setCode(code);
    setErrorMessage('');
    if (code.length == 6) {
      axios.get(`https://449a-103-38-101-4.ngrok-free.app/verification?email=${route?.params?.email}&otpCode=${code}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          navigation.navigate('Home', {email: route?.params?.email});
        } else if (res.data.status == 500) {
          setErrorMessage(res.data.message);
        };
      });
    }
  }

  return (
    <View style={styles.layout}>
      <View style={styles.titleStyle}>
        <Text style={styles.textTitle}>Masukkan Kode OTP</Text>
        <Text style={styles.textSubTitle}>Masukkan kode OTP yang telah dikirim melalui Email ke <Text style={styles.textDescription}>{route?.params?.email}</Text></Text>
      </View>
      <View style={styles.viewOtp}>
        <SmoothPinCodeInput 
          cellSize={36}
          cellSpacing={10}
          autoFocus={true}
          codeLength={6}
          password={false}
          restrictToNumbers={true}
          cellStyle={styles.codeInputFieldStyle}
          cellStyleFocused={styles.codeInputHightlightStyle}
          textStyle={styles.textCell}
          value={code}
          onTextChange={code => onChangeOTP(code)}
        />
        <Text style={{color: 'red', marginTop: 24}}>{errorMessage}</Text>
      </View>
    </View>
  );
};

export default LoginEmailOTP;
