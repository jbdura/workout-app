import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


function HomeScreen({ navigation }: NativeStackHeaderProps) {
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
