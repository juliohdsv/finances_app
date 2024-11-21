import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignIn from "../pages/signIn/signIn";
import SignUp from "../pages/signUp/signUp";
import { theme } from "../theme/theme";

const AuthStack = createNativeStackNavigator();
 
export default function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="Cadastro"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.yellow, 
          },
          headerTintColor: theme.colors.black, 
        }}
      />
    </AuthStack.Navigator>
  )
}