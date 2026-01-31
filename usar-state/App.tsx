import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //Aqui colocaremos as regras de negócio
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');

  //Aqui colocaremos o layout da aplicação
  return (
    <View style={styles.container}>
      <Text>Digite seu primeiro nome</Text>
      <TextInput style={styles.input} 
        placeholder='Fulano'
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#a1a1a1" />
        <Text>Digite seu sobrenome</Text>
      <TextInput style={styles.input} 
        placeholder='Silva'
        value={sobrenome}
        onChangeText={setSobrenome}
        placeholderTextColor="#a1a1a1" />
      <StatusBar style="auto" />
      {
        (nome.length > 0) 
          ? <Text style={styles.saudacao}>Olá, {nome} {sobrenome}!</Text> 
          : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a1a1a1',
    borderRadius: 5,
    padding: 10
  },
  saudacao: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
