import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";


const BottomTab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    
    <BottomTab.Navigator initialRouteName='Home'>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
      />
      <BottomTab.Screen
        name='Planner'
        component={PlannerScreen}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNav;
