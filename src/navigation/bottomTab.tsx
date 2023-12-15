import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { Text } from "react-native";


const BottomTab = createBottomTabNavigator();

function BottomTabNav() {
  return (

    <BottomTab.Navigator initialRouteName='Home'>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={
          {
            unmountOnBlur: true,
            tabBarIcon: ({color, size}) =>
              <MaterialIcons name="home" size={size} color={color} />
          }
        }
      />
      <BottomTab.Screen
        name='Planner'
        component={PlannerScreen}
        options={
          {
            unmountOnBlur: true,
            tabBarIcon: ({color, size}) =>
              <MaterialIcons name="add-task" size={size} color={color} />
          }
        }
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNav;
