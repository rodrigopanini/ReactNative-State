import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login({ navigation }: any) {

  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  function handleLogin() {
    if (usuario === "admin" && senha === "admin") {
        navigation.navigate('BemVindo');
    } else {
        alert("Usuário ou senha incorretos");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Usuário</Text>
      <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} />
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
      <Pressable style={styles.button } onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F1EC",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2C2A26",
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: "#6D665D",
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0D8CC",
    backgroundColor: "#FBF9F5",
    paddingHorizontal: 14,
    color: "#2C2A26",
    marginBottom: 16,
  },
  button: {
    height: 50,
    borderRadius: 14,
    backgroundColor: "#3C3A36",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#F8F4EE",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
});