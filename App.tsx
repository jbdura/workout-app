import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { View } from 'react-native';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
