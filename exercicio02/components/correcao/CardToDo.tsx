import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type ToDoProps = {
    status: number;
    nome: string;
}

export default function CardToDo(props: ToDoProps) {
    return (
        <View style={styles.container}>
            {
                (props.status === 2) 
                 ? <MaterialIcons
                        name="check-circle"
                        size={30}
                        color="green"
                    />
                 : <MaterialIcons
                        name="panorama-fisheye"
                        size={30}
                        color="black"
                    />
            }
            
            
            <Text>{props.nome}</Text>
            {
                (props.status === 0)
                     ? <Text style={styles.status0}>Pendente</Text>
                     : (props.status === 1)
                        ? <Text style={styles.status1}>Executando</Text>
                        : <Text style={styles.status2}>Concluído</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,    
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 10,
        gap: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    status0: {
        fontSize: 12,
        backgroundColor: '#dcdcdc',
        padding: 6,
        borderRadius: 7,
        marginLeft: 'auto',
    },
    status1: {
        fontSize: 12,
        backgroundColor: 'blue',
        color: 'white',
        padding: 6,
        borderRadius: 7,
        marginLeft: 'auto',
    },
    status2: {
        fontSize: 12,
        backgroundColor: 'green',
        color: 'white',
        padding: 6,
        borderRadius: 7,
        marginLeft: 'auto',
    }
})