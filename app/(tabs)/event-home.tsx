import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
};

export default function EventHome() {
  const { eventId } = useLocalSearchParams<{ eventId?: string }>();

  const events: Event[] = [
    { id: "1", name: "CAB Spring Kickoff", date: "Jan 20, 2026", location: "Main Building, Hall A" },
    { id: "2", name: "Study Night", date: "Jan 24, 2026", location: "Library, 2nd Floor" },
    { id: "3", name: "Open Mic", date: "Jan 28, 2026", location: "Student Center Stage" },
    { id: "4", name: "Game Night", date: "Feb 2, 2026", location: "Rec Center Lounge" },
    { id: "5", name: "Culture Showcase", date: "Feb 10, 2026", location: "DAC Auditorium" },
    { id: "6", name: "Volunteer Day", date: "Feb 15, 2026", location: "Meet at Korman Quad" },
  ];

  const selected = eventId ? events.find((e) => e.id === eventId) : undefined;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Home</Text>

      {!selected ? (
        <Text style={styles.subtitle}>No event selected</Text>
      ) : (
        <View style={styles.card}>
          <Text style={styles.name}>{selected.name}</Text>
          <Text style={styles.meta}>{selected.date}</Text>
          <Text style={styles.meta}>{selected.location}</Text>
          <Text style={styles.metaSmall}>Selected ID: {selected.id}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "800", marginBottom: 12, textAlign: "center" },
  subtitle: { fontSize: 16, opacity: 0.8, textAlign: "center" },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
    borderWidth: 2,
    borderColor: "#111827",
  },
  name: { fontSize: 20, fontWeight: "800", marginBottom: 8 },
  meta: { fontSize: 15, marginBottom: 4, opacity: 0.85 },
  metaSmall: { fontSize: 13, marginTop: 10, opacity: 0.7 },
});
