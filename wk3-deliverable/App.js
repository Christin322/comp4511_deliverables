import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import onePiece from "./assets/onepiece.png";
import song from "./assets/song.png";
import hirono from "./assets/hirono.png";
import skz from "./assets/straykids.png";
import awake from "./assets/awake.png";
import sleeping from "./assets/sleeping.png";
import darkop from "./assets/darkop.png";
import darkskz from "./assets/darkskz.png";
import darkhirono from "./assets/darkhirono.png";
import darkslep from "./assets/darksleep.png";
import darkawake from "./assets/darkawake.png";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const orientation = useDeviceOrientation();

  const toggleImage = () => setIsEnabled((previousState) => !previousState);
  const setMode = () => setDarkMode((previousState) => !previousState);

  useEffect(() => {
    if (orientation === "portrait") {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  }, [orientation]);

  return (
    // page container
    <View
      style={{
        padding: 20,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        paddingVertical: isPortrait ? 50 : 30,
        flexDirection: isPortrait ? "column" : "row",
        gap: 10,
        backgroundColor: darkMode ? "#171717" : "white",
      }}
    >
      <View style={{ flex: 3, width: "100%", flexDirection: "row", gap: 10 }}>
        {/* top left column*/}
        <View style={{ flex: 1, gap: 10 }}>
          <Text
            style={[darkMode ? styles.darkText : styles.text, { fontSize: 33 }]}
          >
            {isPortrait ? "About Me!" : "About Me! ❤︎"}
          </Text>

          {/* fav song */}
          <View
            style={[
              darkMode ? styles.darkContainer : styles.container,
              { flex: 1 },
            ]}
          >
            <Text
              style={[
                darkMode ? styles.darkText : styles.text,
                { fontSize: 16, fontWeight: "normal" },
              ]}
            >
              Current Song on Repeat:
            </Text>
            <Text style={darkMode ? styles.darkText : styles.text}>
              Kiss Me Right
            </Text>
            <Text
              style={[
                darkMode ? styles.darkText : styles.text,
                { fontSize: 16, fontWeight: "normal" },
              ]}
            >
              keshi
            </Text>
            <Image
              style={{
                alignSelf: "center",
                width: 110,
                height: 110,
                backgroundColor: darkMode ? "#9aa7fc" : undefined,
                borderRadius: 110 / 2,
                marginVertical: 20,
              }}
              source={song}
            />
          </View>
          {/* switch modes */}
          {isPortrait && (
            <TouchableOpacity
              onPress={setMode}
              style={[
                darkMode
                  ? [styles.darkContainer, styles.darkButton]
                  : [styles.container, styles.button],
                { height: 50 },
              ]}
            >
              <Text
                style={[styles.text, { color: darkMode ? "#242424" : "white" }]}
              >
                {darkMode ? "Light Mode ☀︎" : "Dark Mode ☾"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {/* top right column */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* food */}
          <View
            style={[
              darkMode ? styles.darkContainer : styles.container,
              { flex: 1, width: "100%" },
            ]}
          >
            <Text
              style={[
                darkMode ? styles.darkText : styles.text,
                { fontSize: 16, fontWeight: "normal" },
              ]}
            >
              I like to eat
            </Text>
            <Text style={darkMode ? styles.darkText : styles.text}>
              Seaweed 🍙
            </Text>
          </View>

          {/* fun fact */}
          <View
            style={[
              darkMode ? styles.darkContainer : styles.container,
              { flex: 4, width: "100%" },
            ]}
          >
            <Text style={darkMode ? styles.darkText : styles.text}>
              Addicted to collecting Popmarts!
            </Text>
            <Image
              style={[
                styles.image,
                { alignSelf: "center", flex: 1, margin: 10 },
              ]}
              source={darkMode ? darkhirono : hirono}
            />
          </View>
        </View>
      </View>
      {isPortrait && (
        <>
          {/* fav manga */}
          <View
            style={[
              darkMode ? styles.darkContainer : styles.container,
              { flex: 1 },
            ]}
          >
            <Text
              style={[
                darkMode ? styles.darkText : styles.text,
                { fontSize: 16, fontWeight: "normal" },
              ]}
            >
              Favourite Manga:
            </Text>
            <Image
              style={[
                styles.image,
                { marginTop: 5, width: "100%", height: "70%" },
              ]}
              source={darkMode ? darkop : onePiece}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
            {/* fav artist */}
            <View style={[darkMode ? styles.darkContainer : styles.container]}>
              <Text
                style={[
                  darkMode ? styles.darkText : styles.text,
                  { fontSize: 16, fontWeight: "normal" },
                ]}
              >
                Favourite Artist:
              </Text>
              <Image
                style={[styles.image, { width: "100%", height: "70%" }]}
                source={darkMode ? darkskz : skz}
              />
            </View>
            {/* interactive image */}
            <TouchableOpacity
              onPress={toggleImage}
              style={[
                darkMode
                  ? [styles.darkContainer, styles.darkButton]
                  : [styles.container, styles.button],
                { flex: 1 },
              ]}
            >
              {isEnabled ? (
                <Image
                  style={[styles.image, { width: "100%", height: "70%" }]}
                  source={darkMode ? darkawake : awake}
                />
              ) : (
                <Image
                  style={[styles.image, { width: "100%", height: "70%" }]}
                  source={darkMode ? darkslep : sleeping}
                />
              )}
              <Text
                style={[styles.text, { color: darkMode ? "#242424" : "white" }]}
              >
                {isEnabled ? "Go sleep!" : "Wake me!"}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {!isPortrait && (
        <View style={{ flex: 2, gap: 10 }}>
          <View
            style={[
              darkMode ? styles.darkContainer : styles.container,
              { flex: 1 },
            ]}
          >
            <Text
              style={[
                darkMode ? styles.darkText : styles.text,
                { fontSize: 16, fontWeight: "normal" },
              ]}
            >
              Favourite Manga:
            </Text>
            <Image
              style={[
                styles.image,
                { marginTop: 5, width: "100%", height: "70%" },
              ]}
              source={darkMode ? darkop : onePiece}
            />
          </View>
          <TouchableOpacity
            onPress={setMode}
            style={[
              darkMode
                ? [styles.darkContainer, styles.darkButton]
                : [styles.container, styles.button],
              { height: 50 },
            ]}
          >
            <Text
              style={[styles.text, { color: darkMode ? "#242424" : "white" }]}
            >
              {darkMode ? "Light Mode ☀︎" : "Dark Mode ☾"}
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
            {/* fav artist */}
            <View style={[darkMode ? styles.darkContainer : styles.container]}>
              <Text
                style={[
                  darkMode ? styles.darkText : styles.text,
                  { fontSize: 16, fontWeight: "normal" },
                ]}
              >
                Favourite Artist:
              </Text>
              <Image
                style={[styles.image, { width: "100%", height: "70%" }]}
                source={darkMode ? darkskz : skz}
              />
            </View>
            {/* interactive image */}
            <TouchableOpacity
              onPress={toggleImage}
              style={[
                darkMode
                  ? [styles.darkContainer, styles.darkButton]
                  : [styles.container, styles.button],
                { flex: 1 },
              ]}
            >
              {isEnabled ? (
                <Image
                  style={[styles.image, { width: "100%", height: "70%" }]}
                  source={darkMode ? darkawake : awake}
                />
              ) : (
                <Image
                  style={[styles.image, { width: "100%", height: "70%" }]}
                  source={darkMode ? darkslep : sleeping}
                />
              )}
              <Text
                style={[styles.text, { color: darkMode ? "#242424" : "white" }]}
              >
                {isEnabled ? "Go sleep!" : "Wake me!"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d36db",
  },
  darkButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9aa7fc",
  },
  container: {
    padding: 10,
    borderRadius: 10,
    borderColor: "#1d36db",
    border: "solid",
    borderWidth: 2,
  },
  darkContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#242424",
  },
  text: {
    fontSize: 20,
    color: "#1d36db",
    fontWeight: "bold",
  },
  darkText: {
    fontSize: 20,
    color: "#9aa7fc",
    fontWeight: "bold",
  },
  image: {
    resizeMode: "contain",
  },
});
