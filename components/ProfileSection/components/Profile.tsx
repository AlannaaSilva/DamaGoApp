import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from 'expo-router';
import { Image, Pressable, Text, View, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export function Profile(){
  return(
    <SafeAreaView>
      <View>
        <Link href={'/'}>
          <View style={styles.linkContainer}>
            <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
            <Text style={styles.linkText}>Perfil</Text>
          </View>
        </Link>
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
