import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ValentineCanvas from "../src/components/canvas";
import { useRouter } from "expo-router";

const ValentineScreen = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/countdown");
  };

  return (
    <View style={styles.container}>
      <ValentineCanvas />
      <Text style={styles.title}>happy valentine's day (˶˃ ᵕ ˂˶) .ᐟ.ᐟ</Text>

      <View style={styles.card}>
        <View style={styles.name}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>to law,</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>start</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  card: {
    position: "absolute",
    left: "1%",
    top: "20%",
    backgroundColor: "transparent",
    alignItems: "center",
    width: "40%",
  },
  nameContainer: {
    backgroundColor: "#FFEBED",
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    width: "80%",
    borderColor: "#F07070",
  },
  name: {
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF9C9C",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFB6C1",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "lowercase",
  },
});

export default ValentineScreen;
