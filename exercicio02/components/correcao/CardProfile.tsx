import { StyleSheet, Text, View } from "react-native";

type CardProps = {
    titulo: string;
    valor: string;
}

export default function CardProfile(props: CardProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.campo}>{props.titulo}:</Text>
            <Text>{props.valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 10,
        gap: 7,
        width: '100%',
    },
    campo: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})