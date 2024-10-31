import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
// Definindo o tipo para os parâmetros do stack
export type RootStackParamList = {
  Home: undefined; // Nenhum parâmetro
  HomeUser: undefined; // Nenhum parâmetro
  Cadastro: undefined; // Nenhum parâmetro
  EventDetails: undefined; // Exemplo de parâmetro
};


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Screen name="Home" />
        <Stack.Screen name="HomeUser" />
        <Stack.Screen name="Register" />
        <Stack.Screen name="EventDetails"/>
    </NavigationContainer>
  );
}
