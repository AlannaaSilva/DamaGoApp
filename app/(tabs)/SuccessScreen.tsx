import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SuccessScreen: React.FC = () => {
  const handleViewEvents = () => {
    console.log("Navegar para eventos");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="checkmark-circle-outline" size={150} color="#4CAF50" />
      </View>
      <Text style={styles.title}>Parabéns</Text>
      <Text style={styles.message}>Seu cadastro foi feito com sucesso</Text>
      <TouchableOpacity style={styles.button} onPress={handleViewEvents}>
        <Text style={styles.buttonText}>Ver eventos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1C1B57",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "#1C1B57",
    marginBottom: 40,
  },
  button: {
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default SuccessScreen;
