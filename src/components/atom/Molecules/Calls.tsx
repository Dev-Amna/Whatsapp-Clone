import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import MessageCard from "./MessageCard";
import { data } from "../../../data/callData";

import { moderateScale } from "react-native-size-matters";
const Call = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <MessageCard
              name={item?.name}
              msg={item?.time}
              image={item?.image}
              
              iconName={item?.iconName}
              iconStyling={styles.iconStyle}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle :{
    fontSize: moderateScale(23),
    color: "#008069",
    alignItems:"center"
  }
})
export default Call;
