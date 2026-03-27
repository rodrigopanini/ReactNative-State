import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import { createFirestoreService } from '../services/firestoreService';
import { db } from '../services/firebase';
import ItemListaProduto from "../components/ItemListaProduto";

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

        setDescricao("");
        setNome("");
    }

    function removerProduto(id: string) {
        produtoService.delete(id);
    }

    function alterarProduto(id: string, nome: string, descricao: string) {
        produtoService.update(id, { nome, descricao });
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
                    <ItemListaProduto
                        id={item.id}
                        nome={item.nome}
                        descricao={item.descricao}
                        alterar={alterarProduto}
                        remover={removerProduto}
                    />
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
        padding: 3,
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 5,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnEditar: {
        backgroundColor: 'orange',
        marginRight: 5,
    },
    btnRemover: {
        backgroundColor: 'red',
    },
});
