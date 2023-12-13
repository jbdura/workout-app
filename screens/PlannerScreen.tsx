
import { View, Text, StyleSheet } from "react-native";


function PlannerScreen() {
  return (
    <View style={styles.container}>
      <Text>Planner Screen</Text>

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
