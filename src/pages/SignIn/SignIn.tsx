import { Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { 
  Background, Container, InputArea, 
  Input, Icon, SubmitButton, SubmitText,
  Link, LinkText
} from "./style"

export default function SignIn(){
  const navigation = useNavigation();

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding': ''} //Funciona para IOS, asssim o teclado não cobre os components na hora de digitar. No android é automatico por padrão
        enabled 
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

        <Link onPress={ ()=> navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  )
}

