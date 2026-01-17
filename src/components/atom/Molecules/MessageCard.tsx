import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontAwesome } from "@expo/vector-icons";

interface MessageDataLook {
  name: string;
  time?: string | number;
  image: any;
  msg: string;
  msgCount?: number;
  giveStyle?: any;
   iconName?: string;
 iconStyling?:any;
 logoCom?: any
}
const MessageCard = ({
  name,
  msg,
  time,
  msgCount,
  image,
  giveStyle,
  iconName,
  iconStyling,
  logoCom
}: MessageDataLook) => {
  const timeColor =
    typeof time === "string" && time.toLowerCase() === "yesterday"
      ? "gray"
      : "#036A01";
  return (
    <TouchableOpacity style={styles.Button}>
      {/* left */}
      <View style={styles.leftContainer}>
        <View>
          <Image source={image} style={[styles.image, giveStyle]} />
          {logoCom}
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.message}>{msg}</Text>
        </View>
      </View>
      {/* Right Container */}
      <View style={styles.rightContainer}>
        <Text style={[styles.time, { color: timeColor }]}>{time}</Text>
        {!!msgCount && (
          <View style={styles.msgCountCon}>
            <Text style={styles.msgCount}>{msgCount}</Text>
          </View>
        )}
         {iconName && <FontAwesome name={iconName} style={iconStyling}/>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
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
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  rightContainer: {
    alignItems: "flex-end",
    gap: scale(5),
  },
  message: {
    fontWeight: "400",
    fontSize: moderateScale(13),
    color: "#889095",
  },
  time: {
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  msgCountCon: {
    height: moderateScale(22),
    width: moderateScale(22),
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#036A01",
  },
  msgCount: {
    color: "white",
    fontSize: moderateScale(12),
  },
});
export default MessageCard;
