import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type ItemListaProps = {
  nome: string;
}

export default function ItemLista(props: ItemListaProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="edit" size={24} color="#556eff" />
      <Text style={styles.tarefa}>{props.nome}</Text>
      <MaterialIcons style={styles.remover} name="delete-outline" size={24} color="#ff4e4e"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  tarefa: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  remover: {
    marginLeft: 'auto',
  },
});