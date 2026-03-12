import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import BemVindo from './screens/BemVindo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          options={{headerShown: false}} />
        <Stack.Screen name="BemVindo" component={BemVindo}
          options={{title: 'Bem Vindo'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
