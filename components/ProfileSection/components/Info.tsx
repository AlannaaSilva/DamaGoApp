import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function InfoForm(){
  return(
    <SafeAreaView>
      <View style={styles.box}>
        <MaterialIcons name="person-outline" size={26} color="black" />
        <Text>Carlos Batista</Text>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons name="calendar-range-outline" size={24} color="black" />
        <Text>01/01/1998</Text>
      </View>
      <View style={styles.box}>
        <Ionicons name="call-outline" size={24} color="black" />
        <Text>(98) 99876-6687</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  box: {
    width:370,
    height:54,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'flex-start',
    alignSelf:'center',
    borderWidth: 2,
    borderColor: '#E7E7E7',
    borderStyle: 'solid',
    borderRadius: 10,
    marginBottom:15,
    paddingLeft:10,
    gap: 10
  }

})