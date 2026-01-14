import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

type Props = {
  token: string;
  onStartOver: () => void;
};

export default function MyQR({ token, onStartOver }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MyQR</Text>

      <View style={styles.card}>
        <Text style={styles.token}>Your QR token: {token}</Text>
      </View>

      <Pressable onPress={onStartOver} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>Start over</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "800", marginBottom: 16, textAlign: "center" },
  card: { padding: 16, borderRadius: 12, backgroundColor: "#f3f4f6", borderWidth: 2, borderColor: "#111827", marginBottom: 16 },
  token: { fontSize: 16, fontWeight: "700" },
  button: { paddingVertical: 12, borderRadius: 10, backgroundColor: "#111827", alignItems: "center" },
  pressed: { opacity: 0.85 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "700" },
});