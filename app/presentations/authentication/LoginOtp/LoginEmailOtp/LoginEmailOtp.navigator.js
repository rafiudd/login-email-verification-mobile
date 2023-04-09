import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

const LoginEmailOtpNavigator = () => {
  const navigation = useContext(NavigationContext);

  
  const goToLoginEmail = () => navigation.navigate('LoginEmail');
  const goToResendOtp = () => navigation.navigate('LoginEmailOTP');
  const goToHome = () => navigation.navigate('HomeTabStack', {
    type: "Navigate", 
    screen: 'Home', }
  );


  return {
    
    goToLoginEmail,
    goToHome,
    goToResendOtp
    
  };
};

export default LoginEmailOtpNavigator;
