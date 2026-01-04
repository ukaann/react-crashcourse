import {View, Text, StyleSheet} from 'react-native';

type EventCardProps = {
    name: string;
    date: string;
    location: string;
};

export default function EventCard({name, date, location}: EventCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
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
    name: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 8,
    },
    meta: {
      fontSize: 14,
      opacity: 0.8,
      marginBottom: 4,
    },
  });