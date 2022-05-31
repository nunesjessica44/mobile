import React from "react";
import {
  Text,
  Link, 
  HStack, 
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Divider,
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
      <Center>
        <VStack space={5} alignItems="center">
          <Box
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.200" }}
            px={4}
            flex={1}
            border={10}
            borderRadius="md"
            height={100}
            width={200}
            mt={20}
          >
            {/* texte */}
            <VStack
              border={10}
              borderRadius="md"
              space={4}
              divider={<Divider />}
            >
              <Box border={10} borderRadius="md" px={4} pt={4}>
                Card Colorido
              </Box>
              <Box border={10} borderRadius="md" px={4}>
                Olá eu sou um card que muda de cor, clique no botão abaixo e eu te mostro o que posso fazer :)
              </Box>
              <Box border={10} borderRadius="md" px={4} pb={4}>
                By Jessica Nunes
              </Box>
            </VStack>
          </Box>
        </VStack>
        <ToggleDarkMode />
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
    </HStack>
  );
}
