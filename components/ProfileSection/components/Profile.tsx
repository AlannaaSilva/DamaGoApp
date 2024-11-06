import { Image, Text, View, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export function Profile(){
  return(
    <SafeAreaView>
      <View>
          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>Perfil</Text>
          </View>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image source={require("../../../assets/images/semPerfil.png")}/>
          </View>
        </View>
      </View>
      <View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1779F3',
    borderRadius: 8,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    marginTop:-30
  },
  profileContainer:{
    width:203
  },
  container:{
    width: 'auto',
    alignItems: 'center',
    justifyContent:'center'
  },
  linkContainer:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingLeft: 16
  },
  linkText:{
    fontWeight:'700',
    fontSize: 20
  }
});
