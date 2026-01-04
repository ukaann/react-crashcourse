import { router } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import EventCard from "../components/EventCard";

type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
};

export default function EventList() {
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const events: Event[] = [
    { id: "1", name: "CAB Spring Kickoff", date: "Jan 20, 2026", location: "Main Building, Hall A" },
    { id: "2", name: "Study Night", date: "Jan 24, 2026", location: "Library, 2nd Floor" },
    { id: "3", name: "Open Mic", date: "Jan 28, 2026", location: "Student Center Stage" },
    { id: "4", name: "Game Night", date: "Feb 2, 2026", location: "Rec Center Lounge" },
    { id: "5", name: "Culture Showcase", date: "Feb 10, 2026", location: "DAC Auditorium" },
    { id: "6", name: "Volunteer Day", date: "Feb 15, 2026", location: "Meet at Korman Quad" },
  ];

  const selectedEventName = useMemo(() => {
    if (!selectedEventId) return null;
    return events.find((e) => e.id === selectedEventId)?.name ?? null;
  }, [selectedEventId, events]);
  
  //empty state
  if (events.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No events available</Text>
      </View>
    );
  }

  const goToEventHome = () => {
    if (!selectedEventId) return;
    router.push({
        pathname: '/(tabs)/event-home',
        params: { eventId: selectedEventId },
    });
  };

  return (
    <View style={styles.container}>
      {/* Selected event name at top */}
      <Text style={styles.selectedText}>
        Selected: {selectedEventName ?? "none"}
      </Text>

      {/*  Navigation button */}
      <Pressable
        onPress={goToEventHome}
        disabled={!selectedEventId}
        style={({ pressed }) => [
          styles.button,
          !selectedEventId && styles.buttonDisabled,
          pressed && selectedEventId && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Go to Event Home</Text>
      </Pressable>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedEventId;

          return (
            <Pressable onPress={() => setSelectedEventId(item.id)}>
              <EventCard
                name={item.name}
                date={item.date}
                location={item.location}
                selected={isSelected}
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  selectedText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#111827",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: "#9ca3af",
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  listContent: {
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  emptyText: {
    fontSize: 16,
    opacity: 0.75,
  },
});