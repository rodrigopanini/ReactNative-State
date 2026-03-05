import { StyleSheet, TextInput } from "react-native";

type InputProps = {
    value: string;
    onChangeText: any;
    placeholder?: string;
}

export default function Input({ value, onChangeText, placeholder }: InputProps) {
    return (
        <TextInput
            style={styles.input} 
            value={value} 
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#999"
        />
    )
}

const styles = StyleSheet.create({
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 7,
      flex: 1,
    }
})