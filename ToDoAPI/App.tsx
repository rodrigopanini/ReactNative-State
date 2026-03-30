import { StatusBar } from 'expo-status-bar';
import { use, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type ToDo = {
  id?: string;
  nome: string;
};

export default function App() {

  const [listaToDo, setListaToDo] = useState<ToDo[]>([]);

  useEffect(() => {
    // método chamado quando o componente é montado
    fetch('https://localhost:7276/api/ToDo/Lista')
      .then(resposta => resposta.json())
      .then(json => setListaToDo(json));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={listaToDo}
        keyExtractor={item => item.id!}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
