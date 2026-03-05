import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Carrinho() {

  const valorProduto = 50;
  const [qtdInformada, setQtdInformada] = useState<string>("1");
  const [qtdFinal, setQtdFinal] = useState<number>(1);

  function somar() {
    setQtdFinal(qtdFinal + Number(qtdInformada));
  }

  function subtrair() {
    setQtdFinal(qtdFinal - Number(qtdInformada));
  }

  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text>Camiseta</Text>
            <Text>R$ 50,00</Text>
        </View>
        <View style={styles.contador}>
            <View style={styles.corpo}>
                <Pressable style={styles.botaoEsquerda} onPress={subtrair}>-</Pressable>
                <TextInput  style={styles.input} 
                     value={qtdInformada} 
                     onChangeText={setQtdInformada} />
                <Pressable style={styles.botaoDireita} onPress={somar}>+</Pressable>
            </View>
            <Text>Quantidade: {qtdFinal}</Text>
            <Text>Total: R$ {valorProduto * qtdFinal}</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({  
    container:
    {
        flex: 1,
        padding: 6,
    },
    contador:{
        borderColor: "#c8c8c8",
        borderWidth: 1,
        borderRadius: 4,
        padding: 6,
        marginTop: 6,
        width: "100%",
    },
    botaoEsquerda:{
        borderWidth: 1,
        borderColor: "#c8c8c8",
        backgroundColor: "#eaeaea",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        width: 30,
        textAlign: "center",
    },
    botaoDireita:{
        borderWidth: 1,
        borderColor: "#8781f3",
        backgroundColor: "#8781f3",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        width: 30,
        textAlign: "center",
    },
    input:{
       borderWidth: 1,
        borderColor: "#c8c8c8",
        textAlign: "center",
    },
    corpo:{
        flexDirection: "row", 
        padding: 15,
        borderBottomColor: "#c8c8c8",
        borderBottomWidth: 1,
    }
});