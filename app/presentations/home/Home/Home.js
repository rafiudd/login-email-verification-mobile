import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home ({navigation, route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome {route?.params?.email}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{padding: 10, backgroundColor: 'red', borderRadius: 8, marginTop: 24}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}