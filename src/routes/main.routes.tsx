import { ActivityIndicator, View } from "react-native"

import AuthRoutes from "./auth.routes";

export default function MainRoutes(){

  const loading: boolean = false;
  const signed: boolean = false;

  return(
    signed ? <View></View> : <AuthRoutes/>
  )
}