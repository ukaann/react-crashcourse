import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  eventId: string | null;
};

type Status = "idle" | "loading" | "success" | "error";

export default function HeadcountCard({ eventId }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [headcount, setHeadcount] = useState<number | null>(null);

  // used to prevent stale timeouts from updating state
  const requestIdRef = useRef(0);

  const runFetch = () => {
    if (!eventId) {
      setStatus("idle");
      setHeadcount(null);
      return;
    }

    requestIdRef.current += 1;
    const requestId = requestIdRef.current;

    setStatus("loading");
    setHeadcount(null);

    setTimeout(() => {
      // ignore if a newer request started
      if (requestId !== requestIdRef.current) return;

      // simulate success/error (30% error rate)
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        setStatus("error");
        return;
      }

      // fake “fetched” number
      const fakeNumber = 20 + Math.floor(Math.random() * 81); // 20..100
      setHeadcount(fakeNumber);
      setStatus("success");
    }, 1000);
  };

  // ✅ Fetch when eventId changes
  useEffect(() => {
    runFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId]);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Headcount</Text>

      {!eventId ? (
        <Text style={styles.textMuted}>Select an event to load headcount</Text>
      ) : status === "loading" ? (
        <Text style={styles.text}>Loading headcount...</Text>
      ) : status === "error" ? (
        <View style={styles.row}>
          <Text style={[styles.text, styles.errorText]}>Failed to load</Text>
          <Pressable onPress={runFetch} style={({ pressed }) => [styles.retryBtn, pressed && styles.pressed]}>
            <Text style={styles.retryText}>Retry</Text>
          </Pressable>
        </View>
      ) : status === "success" ? (
        <Text style={styles.number}>{headcount}</Text>
      ) : (
        <Text style={styles.textMuted}>Idle</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#111827",
    backgroundColor: "#f3f4f6",
    marginTop: 12,
  },
  title: { fontSize: 16, fontWeight: "800", marginBottom: 8 },
  text: { fontSize: 14 },
  textMuted: { fontSize: 14, opacity: 0.75 },
  number: { fontSize: 32, fontWeight: "900" },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  errorText: { color: "#b91c1c", fontWeight: "700" },
  retryBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#111827",
  },
  pressed: { opacity: 0.85 },
  retryText: { color: "white", fontWeight: "800" },
});