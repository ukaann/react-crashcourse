import { FlatList, StyleSheet, Text, View } from "react-native";
import EventCard from "../components/EventCard";

type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
};

export default function EventList() {
  const events: Event[] = [
    { id: "1", name: "CAB Spring Kickoff", date: "Jan 20, 2026", location: "Main Building, Hall A" },
    { id: "2", name: "Study Night", date: "Jan 24, 2026", location: "Library, 2nd Floor" },
    { id: "3", name: "Open Mic", date: "Jan 28, 2026", location: "Student Center Stage" },
    { id: "4", name: "Game Night", date: "Feb 2, 2026", location: "Rec Center Lounge" },
    { id: "5", name: "Culture Showcase", date: "Feb 10, 2026", location: "DAC Auditorium" },
    { id: "6", name: "Volunteer Day", date: "Feb 15, 2026", location: "Meet at Korman Quad" },
  ];

  if (events.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No events available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <EventCard name={item.name} date={item.date} location={item.location} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
