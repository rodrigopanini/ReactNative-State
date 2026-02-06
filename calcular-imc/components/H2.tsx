import { StyleSheet, Text } from "react-native";

export default function H2({ texto } : { texto: string }) {

    return (
        <Text style={styles.titulo}>{texto}</Text>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})