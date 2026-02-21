import { StyleSheet, View } from "react-native";
import CardToDo from "../../components/correcao/CardToDo";

export default function ToDoList() {
    return (
        <View style={styles.container}>
            <CardToDo nome="Fazer compras" status={0} />
            <CardToDo nome="Lavar o carro" status={2} />
            <CardToDo nome="Estudar React Native" status={1} />
            <CardToDo nome="Ir ao médico" status={2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        padding: 10,
        gap: 10,
        backgroundColor: '#e9e7e7',
    }
})