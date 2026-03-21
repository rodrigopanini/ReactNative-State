import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Input from "./Input";

type ItemListaProdutoProps = {
    id?: string;
    nome: string;
    descricao: string;
    alterar: (id: string, nome: string, descricao: string) => void;
    remover: (id: string) => void;
}

export default function ItemListaProduto(props: ItemListaProdutoProps) {

    const [editando, setEditando] = useState<boolean>(false);
    const [novoNome, setNovoNome] = useState<string>(props.nome);
    const [novaDescricao, setNovaDescricao] = useState<string>(props.descricao);

    return (
        <View>
            {!editando ? (
                //mostrar o produto quando editando=false
                <View style={styles.containerView}>
                    <MaterialIcons name="edit" size={24} color="#556eff" 
                        onPress={() => setEditando(true)} />
                    <View>
                        <Text style={{fontWeight: 'bold'}}>{props.nome}</Text>
                        <Text>{props.descricao}</Text>
                    </View>
                    <MaterialIcons style={{marginLeft: 'auto'}} name="delete-outline" size={24} color="#ff4e4e" />
                </View>
            ) : (
                //mostrar os inputs para editar o produto quando editando=true
               <View style={styles.containerView}>
                    <View style={{flex: 1, gap: 5}}>
                        <Input value={novoNome} onChangeText={setNovoNome} />
                        <Input value={novaDescricao} onChangeText={setNovaDescricao} />
                    </View>
                    <View>
                    <MaterialIcons name="check" size={24} color="#4caf50" 
                        onPress={() => 
                            {
                                props.alterar(props.id!, novoNome, novaDescricao);
                                setEditando(false)
                            }}/>
                    </View>
               </View>
             )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        gap: 10,
    }
});