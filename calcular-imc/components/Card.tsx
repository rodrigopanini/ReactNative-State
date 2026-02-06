import { StyleSheet, View } from "react-native";

type CardProps = {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#c6c4c4',
        borderRadius: 5,
        padding: 15,
        width: '100%',
    }
})