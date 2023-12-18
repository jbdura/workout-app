import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { View } from 'react-native';
import useCacheResources from './src/hooks/useCacheResources';

export default function App() {

  const isLoaded = useCacheResources();
  
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
