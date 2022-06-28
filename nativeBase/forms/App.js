import React from "react";
import {
  Text,
  Heading,
  NativeBaseProvider,
  extendTheme,
  FormControl,
  VStack,
  Button,
  Input,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Heading size="lg">Formulário de cadastro</Heading>
      <Box>
        <BuildingAForm></BuildingAForm>
      </Box> 
    </NativeBaseProvider>
  );
}

function BuildingAForm() {
  const [formData, setData] = React.useState({});
  return <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label _text={{bold: true}}>
          Nome
        </FormControl.Label>
        <Input placeholder="digite o nome"/>
        <FormControl.Label _text={{bold: true}}>
          Email
        </FormControl.Label>
        <Input placeholder="digite o e-mail"/>
      </FormControl>
      <FormControl.Label _text={{bold: true}}>
          Senha
        </FormControl.Label>
        <Input placeholder="digite a senha"/>
        <FormControl.Label _text={{bold: true}}>
          Confirmar senha
        </FormControl.Label>
        <Input placeholder="digite a senha novamente"/>

        <Button small primary>
          <Text>Enviar cadastro</Text>
        </Button>
    </VStack>;
}

