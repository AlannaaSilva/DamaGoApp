import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function Header(){
  return(
    <SafeAreaView style={styles.container}>
      <Link href={'/'} style={styles.link}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </Link>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Ranking</Text>
        <Image source={require("../../../assets/images/trophy.png")}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    height:100,
    paddingTop:35,
    marginHorizontal:20,
  },
  text:{
    fontWeight:'600',
    fontSize:22,
    color:'#fff'
  },
  link:{
    marginHorizontal:10
  },
  container:{
    backgroundColor:'#000'
  }
})