import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Importações da sua camada de Presentation
import { CardBeneficioComponent } from "@/presentation/card_beneficio_component";
import { MainbuttonComponent } from "../presentation/main_button_component";

export default function App() {
  return (
    <SafeAreaView style={homeStyles.screen}>
      <View style={homeStyles.containerCards}>
        <CardBeneficioComponent
          icone="trending-up-outline"
          textoBeneficio="Acompanhe seu progresso"
        />

        <CardBeneficioComponent
          icone="locate-outline"
          textoBeneficio="Metas personalizadas"
        />

        <CardBeneficioComponent
          icone="lock-closed-outline"
          textoBeneficio="Seus dados protegidos"
        />
      </View>

      <MainbuttonComponent
        texto="Começar agora"
        funcao={() => console.log("Projeto Mob Diet Inicializado!")}
      />
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  containerCards: {
    backgroundColor: "#F9FBFB",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginBottom: 24,

    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
});
