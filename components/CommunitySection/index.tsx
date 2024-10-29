import { Text, View, StyleSheet } from "react-native";
import Table from "./components/Table";

export default function CommunitySection(){
  return(
    <View>
      <Table/>
    </View>
  )
}
const styles = StyleSheet.create({
  text:{
    color:'#000'
  }
})