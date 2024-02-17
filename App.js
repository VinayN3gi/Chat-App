import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


