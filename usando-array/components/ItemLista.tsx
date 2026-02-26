import { StyleSheet, Text, View } from "react-native";

type Pessoa = {
    nome: string;
    dataNascimento: string;
    endereco: string;
};

export default function ItemLista(props : Pessoa) {
    return (
        <View style={styles.container}>
            <Text style={styles.textoNome}>{props.nome}</Text>
            <View style={styles.linha2}>
                <Text style={styles.textoEndereco}>{props.endereco}</Text>
                <Text>{props.dataNascimento}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e4e4e4",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textoNome: {
        fontSize: 18,
        fontWeight: "bold",
    },
    linha2: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textoEndereco: {
        fontSize: 14,
    },
});