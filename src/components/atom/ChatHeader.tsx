import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
const ChatHeader = ({ dp, namePerson } :any) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Ionicons
          name="arrow-back-sharp"
          style={styles.IconStyle}
          onPress={() => router.back()}
        />
        <Image source={dp} style={styles.image} />
        <Text style={styles.name}>{namePerson}</Text>
      </View>

      <View style={styles.actionButtonCon}>
        <AntDesign
          name="video-camera"
          style={styles.IconStyle}
          onPress={() => Alert.alert("You Click Video Call button!!!")}
        />
        <Ionicons
          name="call-sharp"
          style={styles.IconStyle}
          onPress={() => Alert.alert("You Click Voice Call button!!!")}
        />
        <Entypo
          name="dots-three-vertical"
          style={styles.IconStyle}
          onPress={() => Alert.alert("You Click  Menu button!!!")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  nameContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  IconStyle: {
    fontSize: moderateScale(20),
  },
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(50),
  },
  name: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  actionButtonCon: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});

export default ChatHeader;
