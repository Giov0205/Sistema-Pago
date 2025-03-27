import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen1() {
  const router = useRouter();
  const nombre = "Giovanni Medina";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SISTEMA DE PAGOS</Text>
      <Text style={styles.subtitle}>Bienvenido</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/screen2?nombre=${nombre}`)}
      >
        <Text style={styles.buttonText}>Recarga Tiempo Aire</Text>
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
  subtitle: {
    fontSize: 20,
    color: "#555",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#007bff", 
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
