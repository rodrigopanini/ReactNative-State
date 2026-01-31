import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <StatusBar style="auto" />
        <Text style={styles.titulo}>Calculadora IMC</Text>
        <TextInput
          style={styles.input}
          value={peso}
          placeholderTextColor="gray"
          placeholder="Peso ex: 70"
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.input}
          value={altura}
          placeholderTextColor="gray"
          placeholder="Altura ex: 1.75"
          onChangeText={setAltura}
        />
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </View>
      </View>
      <Text style={styles.resultado}>Resultado IMC: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#16079f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
  },
});
