import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
import { FIREBASE_AUTH, FIREBASE_STORE } from "@/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function InfoForm(){
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);

  const fetchData = async (uid: string) => {
    try {
      const userDocRef = doc(FIREBASE_STORE, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUserData({ id: userDoc.id, ...userDoc.data() });
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (user) {
        fetchData(user.uid);
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  let formattedDate = '';

  if (userData && userData.createdAt) {
    const timestamp = userData.createdAt;
    const milliseconds = (timestamp.seconds * 1000) + (timestamp.nanoseconds / 1000000);
    const date = new Date(milliseconds);
    formattedDate = date.toLocaleString('pt-BR');
  }


  return(
    <SafeAreaView>
      {userData &&(
        <>
          <View style={styles.box}>
            <MaterialIcons name="person-outline" size={26} color="black" />
            <Text>{userData.name}</Text>
          </View>
          <View style={styles.box}>
            <MaterialCommunityIcons name="calendar-range-outline" size={24} color="black" />
            <Text>{formattedDate}</Text>
          </View>
          <View style={styles.box}>
            <Ionicons name="call-outline" size={24} color="black" />
            <Text>{userData.phone}</Text>
          </View>
        </>
      )}
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