import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const AuthStack = createNativeStackNavigator();
 
export default function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SigIn"
        component={SignIn}
      />
      <AuthStack.Screen
        name="SigUp"
        component={SignUp}
      />
    </AuthStack.Navigator>
  )
}