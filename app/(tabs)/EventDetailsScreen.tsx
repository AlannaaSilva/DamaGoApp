import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Para os ícones
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute } from "@react-navigation/native";
import { FIREBASE_STORE } from "@/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

interface Event {
  id: string;
  nome: string;
  dataHora: string;
  local: string;
  descricao: string;
  valor: number;
}

type RootStackParamList = {
  HomeUserScreen: undefined;
  EventDetailsScreen: { id: string };
};

type RouteParams = {
  id: string;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'EventDetailsScreen'>;

const detailsimg = require("../../assets/images/detailsimg.png");

const ref = collection(FIREBASE_STORE, "events");

export default function EventDetailsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const [data, setData] = useState<Event[]>([]); 

  const fetchData = async () => {
    try {
      const eventsCollectionRef = ref;

      const eventsQuery = query(eventsCollectionRef);

      const querySnapshot = await getDocs(eventsQuery);

      const eventsData: Event[] = querySnapshot.docs.map((doc) => ({
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

  const { id } = route.params as RouteParams;

  const dataId = data.find((e) => e.id === id);

  if (!dataId) {
    return <Text>Evento não encontrado</Text>;
  }

  const handleWhatsAppPress = () => {
    Linking.openURL(
      "https://wa.me/?text=Venha participar do III Torneio de Damas em São Luís!"
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomeUserScreen')}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <Image source={detailsimg} style={styles.eventImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.eventTitle}>{dataId.nome}</Text>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="gray" />
          <Text style={styles.infoText}>{dataId.dataHora}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="gray" />
          <View>
            <Text style={styles.infoText}>{dataId.local}</Text>
            <Text style={styles.addressText}>
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="attach-money" size={20} color="gray" />
          <Text style={styles.infoText}>Participe por R$ {dataId.valor},00</Text>
        </View>
        <Text style={styles.description}>{dataId.descricao}</Text>
        <TouchableOpacity
          style={styles.whatsAppButton}
          onPress={handleWhatsAppPress}
        >
          <Ionicons name="logo-whatsapp" size={20} color="white" />
          <Text style={styles.whatsAppButtonText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  eventImage: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#555",
  },
  addressText: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 20,
    marginBottom: 20,
  },
  whatsAppButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#25D366",
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
  },
  whatsAppButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
