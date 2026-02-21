import { Image, StyleSheet, Text, View } from "react-native";

export default function Imagens() {
    const urlImagem = 'https://www.estadao.com.br/resizer/v2/ZEIMFVFYV5GABH6YH52MAFRN5A.jpg?quality=80&auth=7ba1eec02078d7d35e0d18afc50a6e3de19c9fbf671835fbda5edbe37998a24f&width=720&height=410&focal=406,339';

    return (
        <View>
            <Image style={styles.imagem} 
            source={{ uri: urlImagem }} 
            resizeMode="cover"
            />
            <Text>ResizeMode = cover</Text>

            <Image style={styles.imagem} 
            source={{ uri: urlImagem }} 
            resizeMode="center"
            />
            <Text>ResizeMode = center</Text>
            <Image style={styles.imagem} 
            source={{ uri: urlImagem }} 
            resizeMode="contain"
            />
            <Text>ResizeMode = contain</Text>
                 <Image style={styles.imagem} 
            source={{ uri: urlImagem }} 
            resizeMode="stretch"
            />
            <Text>ResizeMode = stretch</Text>
            <Image style={styles.imagem} 
            source={{ uri: urlImagem }} 
            resizeMode="repeat"
            />
            <Text>ResizeMode = repeat</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imagem: {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
    },
});