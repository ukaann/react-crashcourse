import { StyleSheet, Text, View } from 'react-native';

type EventCardProps = {
    name: string;
    date: string;
    location: string;
    selected?: boolean;
};

export default function EventCard({name, date, location, selected=false}: EventCardProps) {
    return (
        <View style={[styles.card, selected && styles.cardSelected]}>
            <Text style={[styles.name, selected && styles.nameSelected]}>{name}</Text>
            <Text style={styles.meta}>{date}</Text>
            <Text style={styles.meta}>{location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      padding: 16,
      borderRadius: 12,
      backgroundColor: "#f2f2f2",
    },
    cardSelected: {
        backgroundColor: "#dbeafe",
        borderColor: "#2563eb",
        },
    name: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 8,
    },
    nameSelected: {
        fontWeight: "900",
    },
    meta: {
      fontSize: 14,
      opacity: 0.8,
      marginBottom: 4,
    },
  });