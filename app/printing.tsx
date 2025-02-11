import React from "react";
import { View, Dimensions, Image, StyleSheet, Text } from "react-native";

const PrintingCanvas = () => {
  const { width, height } = Dimensions.get("window");
  const canvasWidth = width;
  const tileHeight = height * 0.3;

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
    left: 25,
  },
  rectangle: {
    position: "absolute",
    bottom: 170,
    left: 150,
    width: 330,
    height: 500,
    zIndex: 2,
  },
  tileImage: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  phototray: {
    position: "absolute",
    bottom: 435,
    left: 150,
    width: 250,
    height: 250,
    zIndex: 1,
  },
});

export default PrintingCanvas;
