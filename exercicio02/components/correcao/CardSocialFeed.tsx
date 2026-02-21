import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { Image, StyleSheet, Text, View } from "react-native"

type CardSocialFeedProps = {
    urlImagem: string,
    nome: string,
    descricao: string,
    texto: string,
    likes: number
}

export default function CardSocialFeed(props: CardSocialFeedProps) {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row" }}>
            <Image 
                style={styles.image} 
                resizeMode="cover"
                source={{uri: props.urlImagem}} />
            <View style={{justifyContent: "center"}}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.descricao}>{props.descricao}</Text>
            </View>
        </View>
        <Text style={{margin: 9}}>{props.texto}</Text>
        <View style={styles.rodape}>
            <AntDesign name="heart" size={20} color="red" />
            <Text>{props.likes} Likes</Text>
            <MaterialIcons name="more-horiz" size={20} color="gray" style={{marginLeft: "auto"}} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: "50%",
        margin: 7
    },
    nome: {
        fontSize: 16,
        fontWeight: "bold"
    },
    descricao: {
        fontSize: 12,
    },
    rodape: {
        padding: 9,
        borderTopWidth: 1,
        borderColor: "#d1d1d1",
        flexDirection: "row",
        gap: 7,
    }
})