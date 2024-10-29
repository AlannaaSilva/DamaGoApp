import { Image, Text, View, StyleSheet } from "react-native";

export default function Event(){
  return(
    <View>
      <Image source={require("../../../assets/images/damaExample.png")} style={styles.container}/>
      <Text style={styles.title}>III Torneio De Damas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16
  },
  container:{
    alignSelf:'center'
  }
});
