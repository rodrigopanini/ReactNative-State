import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MudarTema() {
  //criar o state para controlar o tema
  const [tema, setTema] = useState<number>(0);

  function alterarTema() {
    setTema(tema === 0 ? 1 : 0);
  }

  return (
    <View style={[styles.container, 
            { 
                backgroundColor: 
                    tema === 0 
                        ? "#fff" 
                        : "#232222" 
            }]}>
      <Text style={
            {
                color: tema === 0 
                    ? "#000" 
                    : "#fff"
            }}>Modo {tema === 0 ? "Claro" : "Escuro"}</Text>
      <Pressable style={
                [styles.botao, 
                    {
                        backgroundColor: 
                            tema === 0 
                            ? "#e2e2e2" 
                            : "#333"
                    }
                ]} onPress={alterarTema}>
        <Text style={
            {
                color: tema === 0 
                    ? "#000" 
                    : "#fff"
            }}>Alterar Tema</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  botao: {
    backgroundColor: "#e2e2e2",
    padding: 10,
    borderRadius: 5,
  }
});