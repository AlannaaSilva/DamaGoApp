import { Image, Text, View, StyleSheet } from "react-native";

export default function Event(){
  return(
    <View >
      <Image source={require("../../../assets/images/damaExample.png")}/>
      <Text style={styles.title}>III Torneio De Damas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
