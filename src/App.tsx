import React from "react";

import { Box, ChakraProvider, Heading, Stack, Text } from "@chakra-ui/react";
import GoogleMap from "./Components/GoogleMap";

function App() {
  return (
    <ChakraProvider>
      <>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 4 }}
          py={{ base: 6 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"1.2"}
          >
            Google Map
            <Text as={"span"} color={"green.400"} marginLeft={4}>
              React
            </Text>
          </Heading>
        </Stack>
        <GoogleMap
          defaultPosition={{
            lat: 35.69079374035866,
            lng: 139.76594718293336,
          }}
        />
      </>
    </ChakraProvider>
  );
}

export default App;
