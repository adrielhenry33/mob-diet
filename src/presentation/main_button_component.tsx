import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface Propiedades {
  texto: string;
  funcao: () => void;
}

export function MainbuttonComponent({ texto, funcao }: Propiedades) {
  return (
    <TouchableOpacity onPress={funcao} style={mainButtonStyles.container}>
      <View style={{ width: 20 }} />

      <Text style={mainButtonStyles.texto}>{texto}</Text>

      <Ionicons name="arrow-forward" color={"#ffffff"} size={20} />
    </TouchableOpacity>
  );
}

const mainButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: "#003E4A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "100%",
  },
  texto: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
