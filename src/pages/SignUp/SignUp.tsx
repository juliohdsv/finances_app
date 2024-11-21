import React, { useContext, useState } from "react";
import { Platform } from "react-native"

import { AuthContext } from "../../context/auth.context";
import { 
  Background, 
  Container, 
  InputArea, 
  Input, 
  SubmitButton, 
  SubmitText 
} from "../signIn/style"

export default function SignUp(){

  const { user } = useContext(AuthContext);

  function handleSignUp(){
    console.log(user);
  }

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding': undefined} //Funciona para IOS, asssim o teclado não cobre os components na hora de digitar. No android é automatico por padrão
        enabled 
      >
        <InputArea>
          <Input
            placeholder="Nome"
          />
        </InputArea>

        <InputArea>
          <Input
            placeholder="E-mail"
          />
        </InputArea>

        <InputArea>
          <Input
            placeholder="Senha"
          />
        </InputArea>

        <SubmitButton 
          activeOpacity={0.8}
          onPress={handleSignUp}
        >
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  )
}