import imagePath from "@/src/constants/imagePath";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

const MessageCard = () => {
  return (
    <TouchableOpacity style={styles.Button}>
      {/* left */}
      <View style={styles.leftContainer}>
        <Image source={imagePath.logo} style={styles.image} />

        <View>
          <Text style={styles.name}>Asia Ashraf</Text>
          <Text style={styles.message}>Hi, Whats going On?</Text>
        </View>
      </View>
      {/* Right Container */}
      <View style={styles.rightContainer}>
        <Text style={styles.time}>5:27 am</Text>
        <View style={styles.msgCountCon}>
          <Text style={styles.msgCount}>1</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingHorizontal : scale(10)
  },
  name: {
    fontWeight: "bold",
    fontSize: moderateScale(14),
    color: "black",
  },
  image: {
    height: moderateScale(53),
    width: moderateScale(53),
    borderRadius: moderateScale(50),
  },
  leftContainer: {
    flexDirection : "row",
    alignItems : "center",
  },
  rightContainer: {},
  message: {
    fontWeight: "400",
    fontSize: moderateScale(13),
    color: "#889095",
  },
  time: {
    fontWeight: "bold",
    fontSize: moderateScale(12),
    color: "#036A01",
  },
  msgCountCon: {
    height: moderateScale(22),
    width: moderateScale(22),
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#036A01",
  },
  msgCount: {},
});
export default MessageCard;
