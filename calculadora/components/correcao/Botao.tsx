import { Pressable, StyleSheet, Text } from "react-native";

type BotaoProps = {
    texto: string;
    backgroundColor?: string;
}

export default function Botao(props: BotaoProps) {
  return (
    <Pressable style={
      [styles.botao, 
          {backgroundColor: 
              props.backgroundColor
              ?? '#d9d9d9'
          }
        ]}
    >
        <Text style={styles.texto}>{props.texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 20,
    flex: 1,
    borderRadius: 10,
  },
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});