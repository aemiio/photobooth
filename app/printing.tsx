import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Animated, Easing } from "react-native";
import { Box, Text, Image, Pressable } from "@gluestack-ui/themed";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";


const PrintingCanvas = () => {
  const { height } = Dimensions.get("window");
  const tileHeight = height * 0.3;

  const photoY = useRef(new Animated.Value(0)).current;
  const photoOpacity = useRef(new Animated.Value(0)).current;

  const [showPhoto, setShowPhoto] = useState(false);
  const [showCollectButton, setShowCollectButton] = useState(false);
  const router = useRouter();

  const handleCollect = () => {
    router.push("/collect");
  };

  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setTimeout(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }, 1000);

    setTimeout(() => {
      setShowPhoto(true);
      Animated.parallel([
        Animated.timing(photoY, {
          toValue: 150,
          duration: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(photoOpacity, {
          toValue: 1,
          duration: 2000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowCollectButton(true);
      });
    }, 2000);
  }, [photoY, photoOpacity]);

  return (
    <Box flex={1}>
      <Box flex={1} backgroundColor="$pink50" alignItems="center">
        <Text
          color="$pink400"
          fontSize={24}
          fontWeight="$bold"
          position="absolute"
          top={60}
          left="50%"
          style={{ transform: [{ translateX: -75 }] }}
          zIndex={21}
        >
          photo is printing
        </Text>

        <Box
          position="absolute"
          top={60}
          left="50%"
          style={{
            transform: [{ translateX: -165 }],
            shadowColor: "$shadowLight",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 6,
          }}
        >
          <Image
            source={require("../assets/rectangle.png")}
            alt="rectangle"
            width={330}
            height={410}
            zIndex={2}
            resizeMode="contain"
          />
        </Box>

        <Image
          source={require("../assets/phototray.png")}
          alt="phototray"
          position="absolute"
          top={150}
          left="50%"
          style={{ transform: [{ translateX: -150 }] }}
          width={300}
          height={350}
          zIndex={3}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/tile.png")}
          alt="tile"
          position="absolute"
          bottom={0}
          width={Dimensions.get("window").width}
          height={tileHeight}
          resizeMode="cover"
        />

        {showPhoto && (
          <Animated.Image
            source={require("../assets/frame8.png")}
            style={[
              {
                position: "absolute",
                width: 300,
                height: 350,
                top: 0,
                left: "50%",
                zIndex: 4,
                opacity: photoOpacity,
                transform: [{ translateX: -150 }, { translateY: photoY }],
              },
            ]}
            resizeMode="contain"
          />
        )}

        {showCollectButton && (
          <Pressable
            position="absolute"
            bottom={100}
            backgroundColor="$pink400"
            paddingHorizontal={20}
            paddingVertical={10}
            borderRadius="$xl"
            zIndex={5}
            onPress={handleCollect}
          >
            <Text color="$white" fontSize={16} fontWeight="$bold">
              Collect Photo
            </Text>
          </Pressable>
        )}
      </Box>

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        width={Dimensions.get("window").width}
        height={150}
        zIndex={20}
      >
        <Image
          source={require("../assets/mask.jpg")}
          alt="mask"
          width={Dimensions.get("window").width}
          height={150}
          resizeMode="contain"
        />
      </Box>
    </Box>
  );
};

export default PrintingCanvas;
