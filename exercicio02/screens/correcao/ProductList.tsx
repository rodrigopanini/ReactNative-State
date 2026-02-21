import { StyleSheet, View } from "react-native";
import CardProduct from "../../components/correcao/CardProduct";

export default function ProductList() {
    return (
        <View style={styles.container}>
            <CardProduct urlImagem="https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX679_.jpg" 
                nome="Celular Samsung" 
                preco="R$ 2.999,00" />
            <CardProduct urlImagem="https://m.media-amazon.com/images/I/61E5OdmWojL._AC_SY300_SX300_QL70_ML2_.jpg" 
                nome="Fone de Ouvido" 
                preco="R$ 300,00" />
            <CardProduct urlImagem="https://m.media-amazon.com/images/I/51JxYlfxYmL._AC_SY300_SX300_QL70_ML2_.jpg" 
                nome="Celular Samsung" 
                preco="R$ 2.999,00" />
            <CardProduct urlImagem="https://m.media-amazon.com/images/I/610VuYNv4KL._AC_SX679_.jpg" 
                nome="Celular Samsung" 
                preco="R$ 2.999,00" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 10
    }
})