import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNav';



// const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )

}
