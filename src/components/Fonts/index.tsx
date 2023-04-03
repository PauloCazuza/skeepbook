import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

interface IFonts {
  children: JSX.Element;
}

function FontsProvider({ children }: IFonts) {
  const [fontsLoaded] = useFonts({
    'regular': require("../../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded)
    return <ActivityIndicator size="large" />

  return (
    <>{children}</>
  );
}

export default FontsProvider;