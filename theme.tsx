import { createConfig } from "@gluestack-ui/themed";

export const config = createConfig({
  tokens: {
    colors: {
      pink50: "#FFD9DF", // Light background
      pink100: "#FFEBED", // Light container background
      pink200: "#FFB6C1", // Button background
      pink300: "#F07070", // Border color
      pink400: "#FF9C9C", // Text and accent color

      white: "#FFFFFF",
      black: "#000000",
      shadowLight: "#0000001A",

      pinkBackground: "rgba(255, 217, 223, 0.9)",
    },
    space: {
      4: 16,
      5: 20,
      6: 24,
    },
    sizes: {
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,

      screenWidth: "100%",
      screenHeight: "100%",

      photoStripWidth: 250,
      photoStripHeight: 500,
      noteWidth: 350,
      noteHeight: 250,
    },
    radii: {
      sm: 4,
      md: 8,
      lg: 10,
      xl: 25,
    },
    fontSizes: {
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
    },
    fontWeights: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    shadows: {
      sm: {
        shadowColor: "$shadowLight",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
      },
    },
  },
  components: {
    Button: {
      theme: {
        baseStyle: {
          backgroundColor: "$pink200",
          borderRadius: "$xl",
          paddingHorizontal: 20,
          paddingVertical: 10,
        },
      },
    },
    Text: {
      theme: {
        variants: {
          title: {
            color: "$pink400",
            fontSize: "$2xl",
            fontWeight: "$bold",
          },
          buttonText: {
            color: "$white",
            fontSize: "$lg",
            fontWeight: "$bold",
          },
        },
      },
    },
    Box: {
      theme: {
        variants: {
          card: {
            backgroundColor: "$pink100",
            borderWidth: 1,
            borderColor: "$pink300",
            borderRadius: "$lg",
          },
        },
      },
    },
  },
});

// Define custom theme types
declare module "@gluestack-ui/themed" {
  interface ThemeTokens {
    colors: {
      pink50: string;
      pink100: string;
      pink200: string;
      pink300: string;
      pink400: string;
      white: string;
      black: string;
      shadowLight: string;
      pinkBackground: string;
    };
  }
}
