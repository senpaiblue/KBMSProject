import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}