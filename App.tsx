import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import { theme } from "./src/theme/theme";
import MainRoutes from "./src/routes/main.routes";
import AuthProvider from "./src/context/auth.context";

export default function App() {
  return (    
    <NavigationContainer>
      <AuthProvider>
        <StatusBar 
          backgroundColor={theme.colors.black}
          barStyle="light-content"
          />
        <MainRoutes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
