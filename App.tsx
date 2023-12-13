import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/';
import { View } from 'react-native';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
