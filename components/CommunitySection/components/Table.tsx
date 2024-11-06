import { FIREBASE_STORE } from "@/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";

interface Player {
  id: string;
  nome: string;
  rating: string | number; 
  vitorias: string | number; 
}

interface DataProps {
  item: Player;
}

const ref = collection(FIREBASE_STORE, "ranking");

export default function Table() {
  const [data, setData] = useState<Player[]>([]);

  const fetchData = async () => {
    try {
      const eventsCollectionRef = ref;
      const eventsQuery = query(eventsCollectionRef);
      const querySnapshot = await getDocs(eventsQuery);

      const playersData: Player[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Player[];

      setData(playersData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: DataProps) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nome}</Text>
      <Text style={styles.cell}>{item.rating}</Text>
      <Text style={styles.cellGames}>{item.vitorias}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Nome</Text>
        <Text style={styles.text}>Pontuação</Text>
        <Text style={styles.text}>Total de jogos</Text>
      </View>
      <FlatList
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333333",
    marginHorizontal: 20,
    padding: 20,
    marginBottom: -4,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    marginHorizontal: 20,
    elevation: 1,
    borderRadius: 3,
    borderColor: "#fff",
    padding: 20,
    backgroundColor: "#fff",
  },
  cell: {
    fontSize: 15,
    textAlign: "left",
    flex: 1,
    color: "#4F4F4F",
  },
  cellGames: {
    fontSize: 15,
    textAlign: "center",
    flex: 1,
    color: "#4F4F4F",
  },
});
