import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignIn from "../pages/signIn/signIn";
import SignUp from "../pages/signUp/signUp";

const AuthStack = createNativeStackNavigator();
 
export default function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
      />
    </AuthStack.Navigator>
  )
}