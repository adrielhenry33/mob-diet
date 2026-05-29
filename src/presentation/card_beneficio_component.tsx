import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface Beneficio {
  icone: keyof typeof Ionicons.glyphMap;
  textoBeneficio: string;
}

export function CardBeneficioComponent({ icone, textoBeneficio }: Beneficio) {
  return (
    <View style={styles.boxCard}>
      <View style={styles.container}>
        <Ionicons name={icone} color={"#ffff"} size={30} />
      </View>
      <Text style={styles.texto}>{textoBeneficio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxCard: {
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  container: {
    backgroundColor: "#008B9B",
    elevation: 2,
    shadowColor: "#000",
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 16,
  },
});
