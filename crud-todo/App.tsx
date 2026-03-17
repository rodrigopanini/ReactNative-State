import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './components/Input';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import ItemLista from './components/ItemLista';
import { createFirestoreService } from './services/firestoreService';
import { db } from './services/firebase';

type Tarefa = {
  id?: string;
  nome: string;
}

//Criar o serviço para acessar a coleção de tarefas
const tarefaService = createFirestoreService<Tarefa>(db, "tarefas");

export default function App() {
  // Criar o state para nosso crud de tarefas
  const [nomeTarefa, setNomeTarefa] = useState<string>('');
  const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([]);

  function adicionarTarefa() {
    //Criar um objeto tarefa
    const novaTarefa: Tarefa = {
      nome: nomeTarefa,
    }

    //Adicionar essa nova tarefa na lista de tarefas
    tarefaService.insert(novaTarefa);

    //Limpar o input
    setNomeTarefa('');
  }

  // Função para remover uma tarefa
  function removerTarefa(id: string) {
    tarefaService.delete(id);
  }

  // Função para alterar uma tarefa
  function alterarTarefa(id: string, nome: string) {
    tarefaService.update(id, { nome });
  }

  //método para ser executado ao mostrar a tela 
  // useEffect
  useEffect(() => {
    //Inscrever o serviço para receber as atualizações da coleção de tarefas
    tarefaService.subscribe((data: Tarefa[]) => {
      setListaTarefas(data)
    })
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
        renderItem={({item}) => (
              <ItemLista nome={item.nome} 
              id={item.id} 
              alterar={alterarTarefa}
              remover={removerTarefa} />
        )}
        keyExtractor={(item) => item.id ?? ''}
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
