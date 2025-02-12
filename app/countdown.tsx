import React, { useEffect, useState } from "react";
import { Box, Text, Center } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";


const CountdownScreen = () => {
  const [count, setCount] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          router.push("/printing");
          return 0;
        }
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <Box flex={1} backgroundColor="$pink50">
      <Center flex={1}>
        <Text
          color="$pink400"
          fontSize={24}
          fontWeight="$bold"
          textAlign="center"
        >
          {count}
        </Text>
      </Center>
    </Box>
  );
};

export default CountdownScreen;
