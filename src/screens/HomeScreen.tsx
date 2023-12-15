import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";


function HomeScreen({ navigation }: NativeStackHeaderProps) {

  useEffect(() => {
    console.log("Rendering Home screen")

    return () => console.log("Unmounting Home Screen")
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
      title='Go to Planner'
      onPress={() => navigation.navigate("Planner")}
      />
    </View>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
