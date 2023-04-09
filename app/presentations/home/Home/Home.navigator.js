import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

const AuthNavigator = () => {
  const navigation = useContext(NavigationContext);

  const goToInputEmail = () => navigation.navigate('VerifikasiEmail');

  return {
    navigation,
    goToInputEmail
  };
};

export default AuthNavigator;
