import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Profile } from "./components/Profile";
import InfoForm from "./components/Info";
import Event from "./components/Event";


export default function ProfileSection(){
  return(
    <ScrollView >
        <Profile/>
        <InfoForm/>
        <Text style={styles.title}>
          Últimos eventos
        </Text>
        <Event/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 16,
    marginLeft: 16
  },
});
