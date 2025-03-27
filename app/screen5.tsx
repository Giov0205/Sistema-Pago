import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen5() {
  const router = useRouter();
  const { nombre, plan, tarjeta } = useLocalSearchParams();

  const precios: Record<string, string> = {
    "Plan 1": "$150",
    "Plan 2": "$200"
  };

  const precio = precios[plan] || "No disponible";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pago Completado</Text>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Plan: {plan}</Text>
      <Text style={styles.text}>Total Pagado: {precio}</Text>
      <Text style={styles.text}>Tarjeta Usada: {tarjeta}</Text>
      <Text style={styles.text}>¡Gracias por tu compra!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Volver a Inicio</Text>
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
    marginBottom: 10,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#28a745",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
