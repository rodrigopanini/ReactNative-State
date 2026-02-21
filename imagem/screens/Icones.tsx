import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
// instalar icones
// npx expo install @expo/vector-icons
// https://icons.expo.fyi/
export default function Icones() {
    return (
        <View style={{ flex: 1 }} >
            <Pressable style={styles.botao}>
          <MaterialIcons name="add" size={24} color="white" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    botao: {
        width: 40,
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: "50%",
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
});