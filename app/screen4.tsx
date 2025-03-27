import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen4() {
  const router = useRouter();
  const { nombre, plan } = useLocalSearchParams();

  const precios: Record<string, string> = {
    "Plan 1": "$150",
    "Plan 2": "$200"
  };

  const tarjetas = [
    { titular: nombre, Banco: "SPIN", Numero: "**** **** **** 5658" },
    { titular: nombre, Banco: "Banorte", Numero: "**** **** **** 2526" }
  ];

  const precio = precios[plan] || "No disponible";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen de Compra</Text>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Plan: {plan}</Text>
      <Text style={styles.text}>Total a Pagar: {precio}</Text>

      {tarjetas.map((tarjeta, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() =>
            router.push(`/screen5?nombre=${nombre}&plan=${plan}&tarjeta=${tarjeta.Banco}`)
          }
        >
          <Text style={styles.buttonText}>
            Pagar con {tarjeta.Banco} {tarjeta.Numero}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => router.push(`/screen3?nombre=${nombre}`)}
      >
        <Text style={styles.buttonText}>Regresar</Text>
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
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#6c757d",
  },
});
