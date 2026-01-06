import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function MyQR() {
  const { token } = useLocalSearchParams<{ token?: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MyQR</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Token</Text>
        <Text style={styles.token}>{token ?? "No token provided"}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "800", marginBottom: 16, textAlign: "center" },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#111827",
    backgroundColor: "#f3f4f6",
  },
  label: { fontSize: 14, fontWeight: "700", marginBottom: 8, opacity: 0.8 },
  token: { fontSize: 16, fontWeight: "700" },
});