import React, { useState, useRef } from "react";
import { Animated, Easing } from "react-native";
import { Box, Pressable } from "@gluestack-ui/themed";

const CollectScreen = () => {
  const [frontImage, setFrontImage] = useState("photostrip");

  // Animation values with initial setup
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.Value(0)).current;
  const elevationAnim = useRef(new Animated.Value(0)).current;

  const handlePress = (image) => {
    if (frontImage !== image) {
      setFrontImage(image);

      // Reset animations with slight delay to prevent jarring
      Animated.sequence([
        Animated.delay(50),
        Animated.parallel([
          Animated.spring(scaleAnim, {
            toValue: 1.12,
            friction: 8,
            tension: 45,
            useNativeDriver: true,
          }),

          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 600,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
          }),

          Animated.timing(positionAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.bezier(0.2, 0.6, 0.4, 1),
            useNativeDriver: true,
          }),

          Animated.sequence([
            Animated.timing(elevationAnim, {
              toValue: 1,
              duration: 300,
              easing: Easing.bezier(0.4, 0, 0.2, 1),
              useNativeDriver: true,
            }),
            Animated.timing(elevationAnim, {
              toValue: 0,
              duration: 300,
              easing: Easing.bezier(0.4, 0, 0.2, 1),
              useNativeDriver: true,
            }),
          ]),
        ]),

        Animated.parallel([
          Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 12,
            tension: 35,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
          }),
          Animated.timing(positionAnim, {
            toValue: 0,
            duration: 400,
            easing: Easing.bezier(0.2, 0.6, 0.4, 1),
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  };

  const getAnimatedStyle = (isNote) => {
    const baseRotation = isNote ? -15 : 10;

    const rotateInterpolation = rotateAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [
        `${baseRotation}deg`,
        `${baseRotation + (isNote ? -2 : 2)}deg`,
        `${baseRotation + (isNote ? -3 : 3)}deg`,
      ],
    });

    const translateInterpolation = positionAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, isNote ? -10 : 10, isNote ? -15 : 15],
    });

    return {
      transform: [
        { rotate: rotateInterpolation },
        {
          scale:
            frontImage === (isNote ? "note" : "photostrip") ? scaleAnim : 1,
        },
        { translateX: translateInterpolation },
        {
          translateY: positionAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, isNote ? -5 : 5],
          }),
        },
      ],
      opacity:
        frontImage === (isNote ? "note" : "photostrip")
          ? elevationAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0.95, 0.98, 1],
            })
          : 0.95,
    };
  };

  return (
    <Box
      flex={1}
      backgroundColor="$pink50"
      justifyContent="center"
      alignItems="center"
    >
      <Pressable
        onPress={() => handlePress("note")}
        style={[{ zIndex: frontImage === "note" ? 2 : 1 }]}
        position="absolute"
        justifyContent="center"
        alignItems="center"
      >
        <Animated.Image
          source={require("../assets/note.png")}
          style={[
            {
              width: 350,
              height: 250,
            },
            getAnimatedStyle(true),
          ]}
          resizeMode="contain"
        />
      </Pressable>

      <Pressable
        onPress={() => handlePress("photostrip")}
        style={[{ zIndex: frontImage === "photostrip" ? 2 : 1 }]}
        position="absolute"
        justifyContent="center"
        alignItems="center"
      >
        <Animated.Image
          source={require("../assets/photostrip.png")}
          style={[
            {
              width: 250,
              height: 500,
            },
            getAnimatedStyle(false),
          ]}
          resizeMode="contain"
        />
      </Pressable>
    </Box>
  );
};

export default CollectScreen;
