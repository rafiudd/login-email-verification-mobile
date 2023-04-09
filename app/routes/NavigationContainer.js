import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './AuthStyle.style';
import Login from '../presentations/authentication/Login/Login';
import LoginOtp from '../presentations/authentication/LoginOtp/LoginEmailOtp';
import Home from '../presentations/home/Home';
const flatHeader = { headerTitle: '', headerStyle: { elevation: 0 } };
import ArrowLeft from '../../assets/svg/arrow-left.svg';

const AuthStack = createStackNavigator();

const NavigationContainerExt = () => {
  return (
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}
    >
      <AuthStack.Navigator initialRouteName='Login' >
        <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <AuthStack.Screen name="LoginOTP" component={LoginOtp} options={flatHeader} />
        <AuthStack.Screen name="Home" component={Home} options={{headerShown: false}} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerExt;
