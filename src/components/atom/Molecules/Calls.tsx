import { FlatList, StyleSheet } from "react-native";
import React from "react";
import MessageCard from "./MessageCard";
import { data } from "../../../data/callData";
import { SafeAreaView } from "react-native-safe-area-context";

const Call = () => {
  return (
    <SafeAreaView style={styles.container}>
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
              iconStyle={item?.iconStyle}
              callLeftIconStyle={item?.callLeftIconStyle}
              callLeftIcon={item?.callLeftIcon}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Call;
