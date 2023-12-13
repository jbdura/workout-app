import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from "../screens/HomeScreen";
// import PlannerScreen from "../screens/PlannerScreen";
import BottomTabNav from './bottomTab';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Workout App'
        component={BottomTabNav}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
