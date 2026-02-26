import { StyleSheet, View, FlatList } from "react-native";
import CardProduct from "../../components/correcao/CardProduct";

type Product = {
    id: number;
    urlImagem: string;
    nome: string;
    preco: string;
}

const listaProdutos: Product[] = [
    {
        id: 1,
        urlImagem: "https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX679_.jpg",
        nome: "Celular Samsung",
        preco: "R$ 2.999,00"
    },
    {
        id: 2,
        urlImagem: "https://m.media-amazon.com/images/I/61E5OdmWojL._AC_SY300_SX300_QL70_ML2_.jpg",
        nome: "Fone de Ouvido",
        preco: "R$ 300,00"
    },
    {
        id: 3,
        urlImagem: "https://m.media-amazon.com/images/I/51JxYlfxYmL._AC_SY300_SX300_QL70_ML2_.jpg",
        nome: "Celular Samsung",
        preco: "R$ 2.999,00"
    },
    {
        id: 4,
        urlImagem: "https://m.media-amazon.com/images/I/610VuYNv4KL._AC_SX679_.jpg",
        nome: "Celular Samsung",
        preco: "R$ 2.999,00"
    }
]

export default function ProductList() {
    return (
        <View style={styles.container}>
            <FlatList 
                data={listaProdutos}
                renderItem={({ item }) => (
                        <CardProduct urlImagem={item.urlImagem} 
                            nome={item.nome} 
                            preco={item.preco} />)}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
            />
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