import { useState } from "react";
import { Pressable, View } from "react-native";

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
                //mostrar o produto
                <Pressable onPress={() => setEditando(true)}>
                    mostrando o produto
                </Pressable>
            ) : (
                //mostrar os inputs para editar o produto
                <Pressable onPress={() => setEditando(false)}>
                    editando o produto
                </Pressable>
             )
            }
        </View>
    );
}