import imagePath from "@/src/constants/imagePath";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { data } from "../../../data/statusData";
import MessageCard from "./MessageCard";
import Ionicons from '@expo/vector-icons/Ionicons';
const Status = () => {
  return (
    <SafeAreaView>
      <MessageCard
        name="You"
        image={imagePath.amna}
        msg={"Tap to add status update"}
        logoCom={
          <View style={styles.logoPlus}>
            <Ionicons name="add" size={18} color="black" />
          </View>
        }
      />
      <Text style={styles.text}>Recent updates</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <MessageCard
                name={item?.name}
                msg={item?.time}
                image={item?.image}
                giveStyle={styles.imageStyle}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

//
const styles = StyleSheet.create({
  imageStyle: {
    borderWidth: 3,
    borderColor: "#006B02",
  },
  text: {
    color: "#515152",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
  logoPlus: {
    position: "absolute",
    bottom:verticalScale(-2),
    right:scale(-8),
    width: moderateScale(25),
    height: moderateScale(25),
    backgroundColor: "#008069",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: moderateScale(50),
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Status;