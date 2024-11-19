import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import MainRoutes from "./src/routes/main.routes";
import { theme } from "./src/theme/theme";

export default function App() {
  return (    
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.black} barStyle="dark-content"/>
      <MainRoutes/>
    </NavigationContainer>
  );
}
