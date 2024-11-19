import { Platform } from "react-native"

import { 
  Background, Container, InputArea, 
  Input, Icon, SubmitButton, SubmitText,
  Link, LinkText
} from "./style"

export default function SignIn(){
  return(
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding": ""}
      >
        <Icon
          source={require("../../../assets/coins.png")}
        />

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

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>
            Acessar
          </SubmitText>
        </SubmitButton>

        <Link>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  )
}

