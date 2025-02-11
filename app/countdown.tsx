import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function CountdownScreen() {
  const router = useRouter();
  const [count, setCount] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 1) {
        setCount(count - 1);
      } else if (count === 1) {
        setTimeout(() => {
          router.push("/printing");
        }, 1000);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const getCountdownImage = () => {
    switch (count) {
      case 3:
        return require("../assets/3.png");
      case 2:
        return require("../assets/2.png");
      case 1:
        return require("../assets/1.png");
      default:
        return require("../assets/3.png");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={getCountdownImage()}
        style={styles.countdownImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 217, 223, 0.9)",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  countdownImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT + 100,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
