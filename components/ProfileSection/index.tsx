import { Text, View, StyleSheet } from "react-native";
import { Profile } from "./components/Profile";
import InfoForm from "./components/Info";
import Event from "./components/Event";

export default function ProfileSection(){
  return(
    <View>
      <Profile/>
      <InfoForm/>
      <Text style={styles.title}>
        Últimos eventos
      </Text>
      <Event/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 16,
  },
});
