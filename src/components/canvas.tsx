import React from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Svg, { Line } from "react-native-svg";

const ValentineCanvas = () => {
  const { width, height } = Dimensions.get("window");
  const canvasWidth = width;
  const tileHeight = height * 0.3;

  return (
    <>
      <Svg height="100" width={canvasWidth}>
        <Line
          x1="0"
          y1="100"
          x2={canvasWidth}
          y2="100"
          stroke="#F07070"
          strokeWidth="5"
        />
      </Svg>
      <View style={styles.mainContainer}>
        <Svg height="500" width={canvasWidth}>
          <Line
            x1="150"
            y1="0"
            x2="150"
            y2="500"
            stroke="#F07070"
            strokeWidth="2"
          />
        </Svg>
        <View style={styles.contentContainer}>
          <View style={styles.leftSection}>
            <View style={styles.cardBox}>
              <Svg height="200" width="160">
                <Line
                  x1="10"
                  y1="10"
                  x2="150"
                  y2="10"
                  stroke="#F07070"
                  strokeWidth="2"
                />
                <Line
                  x1="150"
                  y1="10"
                  x2="150"
                  y2="190"
                  stroke="#F07070"
                  strokeWidth="2"
                />
                <Line
                  x1="10"
                  y1="190"
                  x2="150"
                  y2="190"
                  stroke="#F07070"
                  strokeWidth="2"
                />
                <Line
                  x1="10"
                  y1="10"
                  x2="10"
                  y2="190"
                  stroke="#F07070"
                  strokeWidth="2"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>

      <Image
        source={require("../../assets/vector19.png")}
        resizeMode="contain"
        style={styles.curtainImage}
      />

      <Image
        source={require("../../assets/body.png")}
        style={styles.bootImage}
        resizeMode="contain"
      />

      <Image
        source={require("../../assets/tile.png")}
        style={[styles.tileImage, { height: tileHeight }]}
        resizeMode="cover"
      />
      <Svg height="100" width={canvasWidth}>
        <Line
          x1="0"
          y1="59"
          x2={canvasWidth}
          y2="59"
          stroke="#F07070"
          strokeWidth="3"
        ></Line>
      </Svg>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftSection: {
    flex: 1,
    justifyContent: "center",
  },
  cardBox: {
    marginBottom: 20,
  },
  bootImage: {
    position: "absolute",
    bottom: 170,
    left: 150,
    width: 250,
    height: 250,
    zIndex: 2,
  },
  tileImage: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1,
  },
  curtainImage: {
    position: "absolute",
    bottom: 435,
    left: 150,
    width: 250,
    height: 250,
  },
});
export default ValentineCanvas;
