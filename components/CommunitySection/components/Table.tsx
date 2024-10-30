import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";

interface DataProps{
  item:{
    id: string,
    nome: string,
    pontuacao: string,
    totalJogos:string
  }
}

export default function Table(){
  const data = [
    {"id":"1","nome":"samir", "pontuacao":"1200", "totalJogos":"20"},
    {"id":"2","nome":"samir", "pontuacao":"1200", "totalJogos":"20"},
    {"id":"3","nome":"samir", "pontuacao":"1200", "totalJogos":"20"},
    {"id":"4","nome":"samir", "pontuacao":"1200", "totalJogos":"20"},
    {"id":"5","nome":"samir", "pontuacao":"1200", "totalJogos":"20"}
  ]
  const renderItem = ({item}:DataProps)=>(
    <View style={styles.row}>
        <Text style={styles.cell}>{item.nome}</Text>
        <Text style={styles.cell}>{item.pontuacao}</Text>
        <Text style={styles.cellGames}>{item.totalJogos}</Text>
    </View>
  )

  return(
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Nome</Text>
        <Text style={styles.text}>Pontuação</Text>
        <Text style={styles.text}>Total de jogos</Text>
      </View>
      <FlatList data={data} keyExtractor={(item)=> item.id} renderItem={renderItem}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'#fff',
  },
  titleContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#333333',
    marginHorizontal:20,
    padding:20,
    marginBottom:-4,
    borderTopEndRadius:10,
    borderTopLeftRadius:10,
    marginTop:40
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:4,
    marginHorizontal:20,
    elevation:1,
    borderRadius:3,
    borderColor:'#fff',
    padding:20,
    backgroundColor:'#fff'
  },
  cell:{
    fontSize:15,
    textAlign:'left',
    flex:1,
    color:'#4F4F4F',
  },
  cellGames:{
    fontSize:15,
    textAlign:'center',
    flex:1,
    color:'#4F4F4F'
  }
})