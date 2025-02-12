import React from "react";
import { Box, Text, Button, ButtonText, Center } from "@gluestack-ui/themed";
import ValentineCanvas from "../src/components/canvas";
import { useRouter } from "expo-router";


const ValentineScreen = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/countdown");
  };

  return (
    <Box flex={1} backgroundColor="$pink50" alignItems="center">
      <ValentineCanvas />

      <Text
        color="$pink400"
        fontSize={24}
        fontWeight="$bold"
        position="absolute"
        top={60}
        left={25}
      >
        happy valentine's day (˶˃ ᵕ ˂˶) .ᐟ.ᐟ
      </Text>

      <Box
        position="absolute"
        left="1%"
        top="20%"
        backgroundColor="transparent"
        alignItems="center"
        width="40%"
      >
        <Center>
          <Box
            backgroundColor="$pink100"
            borderWidth={1}
            borderColor="$pink300"
            borderRadius="$lg"
            paddingVertical={50}
            paddingHorizontal={30}
            marginBottom={30}
            width="80%"
          >
            <Text
              fontSize={20}
              fontWeight="$bold"
              color="$pink400"
              textAlign="center"
            >
              to law,
            </Text>
          </Box>

          <Button
            paddingVertical={10}
            paddingHorizontal={30}
            backgroundColor="$pink200"
            borderRadius="$xl"
            onPress={handleStart}
          >
            <ButtonText color="$white">start</ButtonText>
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default ValentineScreen;
