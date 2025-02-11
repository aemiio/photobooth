import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
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
    <>
      <View style={styles.container}>
        <Text style={styles.title}>photo is printing</Text>
        <Image
          source={require("../assets/rectangle.png")}
          resizeMode="contain"
          style={styles.rectangle}
        />
        <Image
          source={require("../assets/phototray.png")}
          style={styles.phototray}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/tile.png")}
          style={[styles.tileImage, { height: tileHeight }]}
          resizeMode="cover"
        />
        {showPhoto && (
          <Animated.Image
            source={require("../assets/frame8.png")}
            style={[
              styles.photoStrip,
              {
                opacity: photoOpacity,
                transform: [{ translateX: -150 }, { translateY: photoY }],
              },
            ]}
            resizeMode="contain"
          />
        )}
        {showCollectButton && (
          <TouchableOpacity
            style={styles.collectButton}
            onPress={handleCollect}
          >
            <Text style={styles.collectButtonText}>Collect Photo</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.maskContainer}>
        <Image
          source={require("../assets/mask.jpg")}
          resizeMode="contain"
          style={styles.mask}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD9DF",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9C9C",
    position: "absolute",
    top: 60,
    left: "50%",
    transform: [{ translateX: -75 }],
    zIndex: 21,
  },
  rectangle: {
    position: "absolute",
    shadowColor: "#0000001A",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    marginTop: 50,
    bottom: 170,
    top: 60,
    left: "50%",
    transform: [{ translateX: -165 }],
    width: 330,
    height: 410,
    zIndex: 2,
  },
  tileImage: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  phototray: {
    position: "absolute",
    top: 150,
    left: "50%",
    transform: [{ translateX: -150 }],
    width: 300,
    height: 350,
    zIndex: 3,
  },
  photoStrip: {
    position: "absolute",
    width: 300,
    height: 350,
    top: 0,
    left: "50%",
    zIndex: 4,
  },
  maskContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 150,
    zIndex: 20,
  },
  mask: {
    width: "100%",
    height: "100%",
  },
  collectButton: {
    position: "absolute",
    bottom: 100,
    backgroundColor: "#FF9C9C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    zIndex: 5,
  },
  collectButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PrintingCanvas;
