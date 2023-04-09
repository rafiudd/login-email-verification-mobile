import React, { useEffect,useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './Login.style';
import axios from 'axios';

const LoginEmail = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setError] = useState(false);

  const onChangeEmail = (value) => {
    setError(false);
    setEmail(value)
  };

  const handleLogin = () => {
    if (email.length > 0) {
      axios.get(`https://449a-103-38-101-4.ngrok-free.app/send-otp?email=${email}`)
      .then((res) => {
        if (res.status == 200) {
          navigation.navigate('LoginOTP', {email: email});
        }
      });
    } else {
      setError(true);
      setErrorMessage('email harus diisi');
    }
  };

  return (
      <View style={styles.layout}>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 100, padding: 0}}>
            <Text style={styles.titleStyle}>Masukkan Email</Text>
            <TextInput
              keyboardType='email-address'
              placeholder='Contoh: budi@email.com'
              value={email}
              style={styles.inputContainerStyle}
              onChangeText={(value) => onChangeEmail(value)}
            />
            {isError ? (
              <Text style={{alignSelf: 'flex-start', marginTop: 10, color: 'red'}}>{errorMessage}</Text>
            ) : null}
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.btnNextStyle}
              onPress={() => handleLogin()}>
              <Text style={styles.textNext}>Masuk</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

      export default LoginEmail;
