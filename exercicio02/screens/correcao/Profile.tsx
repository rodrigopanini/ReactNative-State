import { Image, StyleSheet, View } from "react-native";
import CardProfile from "../../components/correcao/CardProfile";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image source={{uri:"https://www.shutterstock.com/image-photo/beauty-charisma-head-shot-portrait-600nw-2647728057.jpg"}}
               style={styles.image} />
            
            <CardProfile titulo="Nome" valor="João Silva" />
            <CardProfile titulo="Email" valor="joao.silva@example.com" />
            <CardProfile titulo="Telefone" valor="+55 11 99999-9999" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#efefef',
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: "50%",
    }
});