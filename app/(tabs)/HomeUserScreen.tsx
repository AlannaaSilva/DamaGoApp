import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import { FIREBASE_STORE } from "@/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

interface Event {
  id: string;
  nome: string;
  local: string;
  descricao: string;
  valor: number;
}

type RootStackParamList = {
  EventDetailsScreen: { id: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'EventDetailsScreen'>;

const ref = collection(FIREBASE_STORE, "events");

export default function HomeUserScreen() {
  const [data, setData] = useState<Event[]>([]);
  const navigation = useNavigation<NavigationProp>();

  const fetchData = async () => {
    try {
      const eventsCollectionRef = ref;
        
      const eventsQuery = query(eventsCollectionRef);
        
      const querySnapshot = await getDocs(eventsQuery);
        
      const eventsData: Event[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Event[];

      setData(eventsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchInput} placeholder="Buscar evento" />
        <MaterialIcons name="settings" size={24} color="black" />
      </View>

      <View style={styles.locationContainer}>
        <TouchableOpacity style={styles.locationButton}>
          <Text>Alcântara</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.locationButton, styles.selectedLocation]}
        >
          <Text>São Luís</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationButton}>
          <Text>Rosário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationButton}>
          <Text>Bacabeira</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.eventsContainer}>
        <Text style={styles.sectionTitle}>Próximos eventos</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      {data.map((e) => (
        <View key={e.id} style={styles.eventCard}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1720612507835-afccac9dfe7a?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.eventImage}
          />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{e.nome}</Text>
            <Text style={styles.eventLocation}>Local: {e.local}</Text>
            <TouchableOpacity
              style={styles.subscribeButton}
              onPress={() =>
                navigation.navigate("EventDetailsScreen", { id: e.id })
              }
            >
              <Text style={styles.subscribeButtonText}>Inscreva-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  locationButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  selectedLocation: {
    backgroundColor: "#e0e0e0",
  },
  eventsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    color: "#007bff",
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  eventImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventDetails: {
    padding: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventLocation: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  subscribeButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  subscribeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
