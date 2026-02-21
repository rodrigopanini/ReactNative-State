import { Image, StyleSheet, Text, View } from "react-native";

type CardProps = {
    urlImagem: string;
    nome : string;
    preco: string;
}

export default function CardProduct( props: CardProps ) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri:props.urlImagem}} 
                    style={styles.image} 
                    resizeMode="contain"/>
            </View>
            <View style={{ flex: 1 }}   >
               <View>
                    <Text style={styles.texto}>{props.nome}</Text>
                </View>
                <View style={styles.borda}>
                    <Text style={styles.texto}>{props.preco}</Text>
                </View>  
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
        borderRadius: 5,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10,
        gap: 7
   },
   image: {
        width: 50,
        height: 50
   },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    borda: {
        borderTopWidth: 1,
        borderColor: '#d8d8d8',
    }
})