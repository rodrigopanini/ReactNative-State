import { StyleSheet, View } from "react-native";
import Botao from "../components/correcao/Botao";

export default function Correcao() {
  return (
    <View style={styles.container}>
        <View style={styles.calculadora}>
            <View style={styles.display}>

            </View>
            <View style={styles.row}>
                <Botao texto="7" />
                <Botao texto="8" />
                <Botao texto="9" />
                <Botao texto="/" />
            </View>
            <View style={styles.row}>
                <Botao texto="4" />
                <Botao texto="5" />
                <Botao texto="6" />
                <Botao texto="*" />
            </View>
            <View style={styles.row}>
                <Botao texto="1" />
                <Botao texto="2" />
                <Botao texto="3" />
                <Botao texto="-" />
            </View>
            <View style={styles.row}>
                <Botao texto="0" />
                <Botao texto="." />
                <Botao texto="+" />
                <Botao texto="=" backgroundColor="#ffa048" />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  calculadora: {
    backgroundColor: '#6b6a6a',
    padding: 20,
    borderRadius: 20,
  },
  display: {
    backgroundColor: '#7cf8ff',
    height: 80,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
  }
});