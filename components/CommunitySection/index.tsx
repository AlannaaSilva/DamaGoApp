import { Text, View, StyleSheet } from "react-native";
import Table from "./components/Table";
import Header from "./components/Header";

export default function CommunitySection(){
  return(
    <View>
      <Header/>
      <Table/>
    </View>
  )
}
const styles = StyleSheet.create({
  text:{
    color:'#000'
  }
})