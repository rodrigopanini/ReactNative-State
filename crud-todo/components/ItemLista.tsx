import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Input from "./Input";

type ItemListaProps = {
  id?: string;
  nome: string;
  remover: (id: string) => void;
  alterar: (id: string, nome: string) => void;
}

export default function ItemLista(props: ItemListaProps) {

  const [editando, setEditando] = useState<boolean>(false);
  const [novoNome, setNovoNome] = useState<string>(props.nome);

  return (
    <View style={styles.container}>
      {!editando ? (
        <>
          <Pressable 
              onPress={() => setEditando(true)}>
            <MaterialIcons name="edit" size={24} color="#556eff" />
          </Pressable>
          <Text style={styles.tarefa}>{props.nome}</Text>
          <Pressable style={styles.remover} 
                onPress={() => props.remover(props.id!)} >
            <MaterialIcons
                name="delete-outline" size={24} 
                color="#ff4e4e"/>
          </Pressable>
      </>) : 
      (
        <>
          <Input 
              value={novoNome} 
              onChangeText={setNovoNome} />
          <Pressable onPress={() => {
            props.alterar(props.id!, novoNome);
            setEditando(false);
          }}>
            <MaterialIcons
                name="check" size={24} 
                color="#4caf50"/>
          </Pressable>
        </>
      )}
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