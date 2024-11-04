import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./(tabs)/index";
import HomeUserScreen from "./(tabs)/HomeUserScreen";
import Register from "./(stack)/Register";
import EventDetailsScreen from "./(stack)/EventDetailsScreen";

// Definindo o tipo para os parâmetros do stack
export type RootStackParamList = {
  Home: undefined; // Nenhum parâmetro
  HomeUser: undefined; // Nenhum parâmetro
  Cadastro: undefined; // Nenhum parâmetro
  EventDetails: undefined; // Exemplo de parâmetro
};

const Stack = createStackNavigator<RootStackParamList>(); // Aplicando o tipo ao Stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeUser" component={HomeUserScreen} />
        <Stack.Screen name="Cadastro" component={Register} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
