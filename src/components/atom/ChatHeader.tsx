import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { moderateScale, scale } from "react-native-size-matters";
const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Ionicons name="arrow-back-sharp" style={styles.backIcon} />
        <Image
          source={require("@/src/assets/images/icon.png")}
          style={styles.image}
        />
        <Text style={styles.name}>Amna Ashraf</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  nameContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  backIcon: {},
  image: {
    height :moderateScale(50),
    width: moderateScale(50)
  },
  name: {},
});

export default ChatHeader;
