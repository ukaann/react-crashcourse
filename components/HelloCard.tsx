import { StyleSheet, Text, View } from 'react-native';

type HelloCardProps = {
    name: string;
};

export default function HelloCard({name}: HelloCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Hello, {name}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#f2f2f2",
      },
      text: {
        fontSize: 18,
      },
    });