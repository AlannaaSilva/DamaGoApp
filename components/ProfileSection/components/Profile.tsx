import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Image, Pressable, Text, View, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export function Profile(){
  return(
    <SafeAreaView>
      <View>
        <Text>Perfil</Text>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image source={require("../../../assets/images/Avatar.png")}/>
            <Pressable style={styles.iconContainer}>
              <EvilIcons name="pencil" size={28} color="white" />
            </Pressable>
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
    width:128
  },
  container:{
    width: 'auto',
    alignItems: 'center',
    justifyContent:'center'
  }
});
