import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

const LoginNavigation = () => {
  const navigation = useContext(NavigationContext);

  const goToOtp = () => navigation.navigate('LoginEmailOTP');
  const goToOtpVerif = () => navigation.navigate('LoginEmailOTP');
  const goToHome = () => navigation.navigate('HomeTabStack', {
    type: "Navigate", 
    screen: 'Home', }
  );
  const goToNewNumber = () => navigation.navigate('NewNumber')
  const goToMetodeUnblock = () => navigation.navigate('MetodeUnblock');
  const goToNewDeviceOtp = () => navigation.navigate('NewDeviceOtpLogin');
 

  return {
    navigation,
    goToOtp,goToHome,goToNewNumber,goToMetodeUnblock,goToNewDeviceOtp,goToOtpVerif
  };
};

export default LoginNavigation;
