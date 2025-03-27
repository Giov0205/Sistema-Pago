import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen3() {
  const router = useRouter();
  const { nombre = "Usuario", planTelcel = "Plan 1", planUnefon = "Plan 2" } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paquetes Disponibles:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/screen4?nombre=${nombre}&plan=${planTelcel}`)}
      >
        <Text style={styles.buttonText}>Elegir {planTelcel}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => router.push(`/screen4?nombre=${nombre}&plan=${planUnefon}`)}
      >
        <Text style={styles.buttonText}>Elegir {planUnefon}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#ffc107",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#6c757d",
  },
});
