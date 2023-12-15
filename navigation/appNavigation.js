import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';
import MainScreen from '../Screens/MainScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />
      <Stack.Screen name="MainScreen" options={{headerShown:false}} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}