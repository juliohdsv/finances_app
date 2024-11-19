import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Background = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray[800]};
`;
export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.Image`
  margin-bottom: 27px;
`;
export const InputArea = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background-color: ${theme.colors.white};
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: ${theme.colors.black};
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height:45px;
  border-radius: 8px;
  background-color: ${theme.colors.yellow};
  align-items:center;
  justify-content:center;
`;

export const SubmitText = styled.Text`
  font-size:20px;
  font-weight:bold;
  color: ${theme.colors.black};
`;

export const Link = styled.TouchableOpacity`
  margin-top:10px;
  margin-bottom:10px;
`;

export const LinkText = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  margin-top: 4px;
`;