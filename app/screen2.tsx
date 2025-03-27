import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen2() {
  const router = useRouter();
  const { nombre } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERFIL</Text>
      <Text style={styles.text}>Nombre: {nombre || "No se recibió el nombre"}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/screen3?nombre=${nombre}`)}
      >
        <Text style={styles.buttonText}>Ver Planes</Text>
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
  text: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#28a745", 
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
