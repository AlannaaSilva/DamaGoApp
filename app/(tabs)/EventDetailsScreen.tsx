import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Para os ícones

export default function EventDetailsScreen() {
  const handleWhatsAppPress = () => {
    // URL para compartilhar via WhatsApp
    Linking.openURL(
      "https://wa.me/?text=Venha participar do III Torneio de Damas em São Luís!"
    );
  };

  return (
    <View style={styles.container}>
      {/* Imagem do evento */}
      <Image
        source={{ uri: "https://via.placeholder.com/400x200" }}
        style={styles.eventImage}
      />

      {/* Detalhes do evento */}
      <View style={styles.detailsContainer}>
        <Text style={styles.eventTitle}>III Torneio de Damas</Text>

        {/* Data */}
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="gray" />
          <Text style={styles.infoText}>20 de novembro - 21:00</Text>
        </View>

        {/* Local */}
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="gray" />
          <View>
            <Text style={styles.infoText}>Undb - São Luís</Text>
            <Text style={styles.addressText}>
              Av. Coronel Colares Moreira, 443A - Jardim Renascença
            </Text>
          </View>
        </View>

        {/* Valor */}
        <View style={styles.infoRow}>
          <MaterialIcons name="attach-money" size={20} color="gray" />
          <Text style={styles.infoText}>Participe por R$ 60,00</Text>
        </View>

        {/* Descrição */}
        <Text style={styles.description}>
          Venha participar do Torneio de Damas em São Luís! Um evento imperdível
          para jogadores que desejam testar suas habilidades e competir em alto
          nível. Inscreva-se agora pelo WhatsApp e garanta sua vaga!
        </Text>

        {/* Botão WhatsApp */}
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
