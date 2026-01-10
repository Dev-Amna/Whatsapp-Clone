import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ButtonComp = ({ btn, onpress,style }: any) => {
  return (
    <TouchableOpacity style={[styles.btn_style, style]} onPress={onpress} activeOpacity={0.8}>
      <Text style={styles.btn_text}>{btn}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btn_style: {
    width: "100%",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    backgroundColor: "#00A884",
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  btn_text: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
