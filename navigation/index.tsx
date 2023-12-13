import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNav';


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )

}
