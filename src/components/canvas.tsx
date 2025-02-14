import React from "react";
import { Dimensions } from "react-native";
import { Box, Image } from "@gluestack-ui/themed";
import Svg, { Line } from "react-native-svg";

const ValentineCanvas = () => {
  const { width, height } = Dimensions.get("window");
  const canvasWidth = width;
  const tileHeight = height * 0.3;

  const lineColor = "#F07070";

  return (
    <>
      <Svg height="100" width={canvasWidth}>
        <Line
          x1="0"
          y1="100"
          x2={canvasWidth}
          y2="100"
          stroke={lineColor}
          strokeWidth="5"
        />
      </Svg>

      <Box flex={1} flexDirection="row">
        <Svg height="500" width={canvasWidth}>
          <Line
            x1="150"
            y1="0"
            x2="150"
            y2="500"
            stroke={lineColor}
            strokeWidth="2"
          />
        </Svg>

        <Box flex={1} flexDirection="row">
          <Box flex={1} justifyContent="center">
            <Box marginBottom={20}>
              <Svg height="200" width="160">
                <Line
                  x1="10"
                  y1="10"
                  x2="150"
                  y2="10"
                  stroke={lineColor}
                  strokeWidth="2"
                />
                <Line
                  x1="150"
                  y1="10"
                  x2="150"
                  y2="190"
                  stroke={lineColor}
                  strokeWidth="2"
                />
                <Line
                  x1="10"
                  y1="190"
                  x2="150"
                  y2="190"
                  stroke={lineColor}
                  strokeWidth="2"
                />
                <Line
                  x1="10"
                  y1="10"
                  x2="10"
                  y2="190"
                  stroke={lineColor}
                  strokeWidth="2"
                />
              </Svg>
            </Box>
          </Box>
        </Box>
      </Box>

      <Image
        source={require("../../assets/vector19.png")}
        alt="curtain"
        position="absolute"
        bottom={435}
        left={150}
        width={250}
        height={250}
        resizeMode="contain"
      />

      <Image
        source={require("../../assets/body.png")}
        alt="boot"
        position="absolute"
        bottom={170}
        left={150}
        width={250}
        height={250}
        zIndex={2}
        resizeMode="contain"
      />

      <Image
        source={require("../../assets/tile.png")}
        alt="tile"
        position="absolute"
        bottom={0}
        width={canvasWidth}
        height={tileHeight}
        zIndex={1}
        resizeMode="cover"
      />

      <Svg height="100" width={canvasWidth}>
        <Line
          x1="0"
          y1="59"
          x2={canvasWidth}
          y2="59"
          stroke={lineColor}
          strokeWidth="3"
        />
      </Svg>
    </>
  );
};

export default ValentineCanvas;
