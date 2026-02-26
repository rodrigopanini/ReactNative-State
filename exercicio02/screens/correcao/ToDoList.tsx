import { FlatList, StyleSheet, View } from "react-native";
import CardToDo from "../../components/correcao/CardToDo";

type ToDo = {
    id: number;
    nome: string;
    status: number; // 0 - Pendente, 1 - Em andamento, 2 - Concluído
}

const listaToDo: ToDo[] = 
[
    {
        id: 1,
        nome: "Fazer compras",
        status: 0,
    },
    {
        id: 2,
        nome: "Lavar o carro",
        status: 2,
    },
    {
        id: 3,
        nome: "Estudar React Native",
        status: 1,
    },
    {
        id: 4,
        nome: "Ir ao médico",
        status: 2,
    },
]

export default function ToDoList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={listaToDo}
                renderItem={({item}) => (
                <CardToDo 
                    nome={item.nome} 
                      status={item.status} />
                )}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{padding: 5}} />}
            />
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