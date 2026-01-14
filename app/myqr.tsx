import { router, useLocalSearchParams } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

type MyQRProps = {
  token?: string;
  onStartOver?: () => void;
};

export default function MyQR({ token: tokenProp, onStartOver }: MyQRProps) {
  // If this screen is ever opened via routing, allow params fallback
  const { token: tokenParam } = useLocalSearchParams<{ token?: string }>();
  const token = tokenProp ?? tokenParam ?? null;

  const handleStartOver = () => {
    if (onStartOver) {
      onStartOver(); // clears token in React state (when used in conditional flow)
      return;
    }
    // fallback if opened via router directly
    router.replace("/register" as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MyQR</Text>

      <View style={styles.card}>
        <Text style={styles.tokenText}>Your QR token: {token ?? "none"}</Text>
      </View>

      <Pressable onPress={handleStartOver} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>Start over</Text>
      </Pressable>
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
    marginBottom: 16,
  },
  tokenText: { fontSize: 16, fontWeight: "700" },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#111827",
    alignItems: "center",
  },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "700" },
});