import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function Tabuada() {

  const [numero, setNumero] = useState<string>('1');

  const tabuada : number[] = [
    1,2,3,4,5,6,7,8,9,10
  ]
  
  return (
    <View>
        <View style={styles.topo}>
          <Text>Número</Text>
          <TextInput style={styles.input} 
              value={numero} 
              onChangeText={setNumero} />
        </View>
        {
          tabuada.map((nr) => (
            <Text>{numero} x {nr} = {Number(numero) * nr}</Text>
          ))
        }
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dddada",
    padding: 5,
    borderRadius: 5,
  }
});