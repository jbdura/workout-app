import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


function PlannerScreen({ navigation }: NativeStackHeaderProps) {

  return (
    <View style={styles.container}>
      <Text>Planner Screen</Text>
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default PlannerScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});