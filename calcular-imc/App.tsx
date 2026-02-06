import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import H2 from './components/H2';
import Input from './components/Input';
import Card from './components/Card';

export default function App() {
  const [peso, setPeso] = useState<string>('');
  const [altura, setAltura] = useState<string>('');
  const [resultado, setResultado] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>('');

  function calcularIMC() {
    // Calcular o IMC (Peso / (Altura * Altura))
    const pesoNum = Number(peso);
    const alturaNum = Number(altura);
    const resultadoNum = pesoNum / (alturaNum * alturaNum);
    setResultado(resultadoNum);

    // Verificar categoria do IMC
    if (resultadoNum < 18.5) {
      setCategoria('Abaixo do peso');
    }
    else if (resultadoNum >= 18.5 && resultadoNum < 25) {
      setCategoria('Peso normal');
    }
    else if (resultadoNum >= 25 && resultadoNum < 30) {
      setCategoria('Excesso de peso');
    }
    else if (resultadoNum >= 30 && resultadoNum < 35) {
      setCategoria('Obesidade classe I');
    }
    else if (resultadoNum >= 35 && resultadoNum < 40) {
      setCategoria('Obesidade classe II');
    }
    else if (resultadoNum >= 40) {
      setCategoria('Obesidade classe III');
    } 
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.box}>
        <H2 texto='Calculadora IMC' />
        <Input 
            value={peso}
            onChangeText={setPeso}
            placeholder='Peso - Ex: 70' />

        <Input 
            value={altura}
            onChangeText={setAltura}
            placeholder='Altura - Ex: 1.75'/>

         <Pressable style={styles.botao} onPress={calcularIMC}>
            <Text style={styles.botaoTexto}>Calcular</Text>
         </Pressable>
      </View>
      {
        resultado > 0 
          && <Card>
                <Text style={styles.resultado}>Seu IMC é: {resultado.toFixed(2)}</Text>
             </Card>
      }
      <Text style={styles.resultado}>{categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },
  input: {
    borderWidth: 1,
    borderColor: '#b2b2b2',
    padding: 7,
    marginBottom: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#115bef',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
