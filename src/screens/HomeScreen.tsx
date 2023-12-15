import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import data from '../data.json'


function HomeScreen({ navigation }: NativeStackHeaderProps) {

  useEffect(() => {
    console.log("Rendering Home screen")

    return () => console.log("Unmounting Home Screen")
  }, []);


  const renderItem = ({ item }:any) => (
    <View>
      <Text>{ item.name }</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      {/* <Text>Home Screen</Text> */}
      {/* <Text> { JSON.stringify(data) }</Text> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
