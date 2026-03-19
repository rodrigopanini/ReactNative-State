import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import { createFirestoreService } from '../services/firestoreService';
import { db } from '../services/firebase';

type Produto = {
    id?: string;
    nome: string;
    descricao: string;
}

const produtoService = createFirestoreService<Produto>(db, "produtos");

export default function Crud2() {
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listaProduto, setListaProduto] = useState<Produto[]>([]);

    function inserirProduto() {
        const novoProduto: Produto = {
            nome : nome,
            descricao: descricao,
        }

        produtoService.insert(novoProduto);
    }

    useEffect(() => {
        produtoService.subscribe((data) => {
            setListaProduto(data);
        })
    }, [])
  
  return (
    <View style={styles.container}>
        <View>
            <Input value={nome} 
                onChangeText={setNome} 
                placeholder="Nome" />

            <View style={{flexDirection: 'row'}} >
                <Input value={descricao} 
                    onChangeText={setDescricao} 
                    placeholder="Descrição" />

                <Pressable onPress={inserirProduto} style={styles.botao}>
                    <Text style={{color: 'white'}}>Adicionar</Text>
                </Pressable>
            </View>
        </View>
        <FlatList
            data={listaProduto}
            renderItem={({item}) =>
                (
                    <View>
                        <Pressable>Editar</Pressable>
                        <Text>{item.nome} - {item.descricao}</Text>
                        <Pressable>Remover</Pressable>
                    </View>
                )
            }
            keyExtractor={(item) => item.id!}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    botao: {
        backgroundColor: 'blue',
        padding: 10,
        justifyContent: 'center',
        marginLeft: 10,
    },
});
