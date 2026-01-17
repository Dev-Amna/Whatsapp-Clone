import { View, Text, FlatList } from "react-native";
import React from "react";
import MessageCard from "./MessageCard";
import { data } from "../../../data/chatData";

const Chat = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <MessageCard
              name={item?.name}
              time={item?.time}
              msg={item?.msg}
              image={item?.image}
              msgCount={item?.msgcount}
            />
          );
        }}
      />
    </View>
  );
};

export default Chat;
