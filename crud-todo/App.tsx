import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './components/Input';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import ItemLista from './components/ItemLista';

type Tarefa = {
  id: string;
  nome: string;
}

export default function App() {
  // Criar o state para nosso crud de tarefas
  const [nomeTarefa, setNomeTarefa] = useState<string>('');
  const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([]);

  function adicionarTarefa() {
    //Criar um objeto tarefa
    const novaTarefa: Tarefa = {
      id: listaTarefas.length + 1,
      nome: nomeTarefa,
    }

    //Adicionar essa nova tarefa na lista de tarefas
    setListaTarefas([...listaTarefas, novaTarefa]);

    //Limpar o input
    setNomeTarefa('');
  }

  //método para ser executado ao mostrar a tela 
  // useEffect
  useEffect(() => {
    console.log('Tela carregada');
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.dados}>
          <Input 
              value={nomeTarefa} 
              onChangeText={setNomeTarefa} 
              placeholder='Digite a sua tarefa'/>
          <Pressable style={styles.botao} onPress={adicionarTarefa} >
              <MaterialIcons name="add" size={24} color="white" />
          </Pressable>
      </View>
      <FlatList   
        data={listaTarefas} 
        renderItem={({item}) => <ItemLista nome={item.nome} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  dados: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 5,
    backgroundColor: 'blue',
    borderRadius: "50%",
    height: 35,
    width: 35,
  },
});
