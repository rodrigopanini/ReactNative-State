import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemLista from "./components/ItemLista";

type Pessoa = {
  id: number;
  nome: string;
  dataNascimento: string;
  endereco: string;
};

const listaPessoas: Pessoa[] = 
[
  {
    id: 1,
    nome: "João",
    dataNascimento: "10/01/1990",
    endereco: "Rua das Flores, 123"
  },
  {
    id: 2,
    nome: "Ana",
    dataNascimento: "20/02/1992",
    endereco: "Avenida Central, 456"
  },
  {
    id: 3,
    nome: "Carlos",
    dataNascimento: "30/03/1988",
    endereco: "Rua dos Pinheiros, 789"  
  }
]

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList 
        data={listaPessoas}
        renderItem={({item}) => <ItemLista 
                            nome={item.nome} 
                            endereco={item.endereco}
                            dataNascimento={item.dataNascimento} 
                            />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e4e4",
  }
});