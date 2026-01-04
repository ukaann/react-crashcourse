import { StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import HelloCard from '@/components/HelloCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staff Check-in</Text>
      <Text style={styles.subtitle}>Uyanga Chuluunbaatar</Text>
      <HelloCard name="Uyanga Chuluunbaatar" />
      <HelloWave />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
