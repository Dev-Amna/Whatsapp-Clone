import { View, FlatList } from "react-native";
import React from "react";
import MessageCard from "./MessageCard";
import { data } from "../../../data/callData";


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
              iconStyle={item?.iconStyle}
            />
          );
        }}
      />
    </View>
  );
};


export default Call;
