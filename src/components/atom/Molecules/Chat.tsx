import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import MessageCard from "./MessageCard";
import { data } from "../../../data/chatData";
import { useRouter } from "expo-router";

const Chat = () => {
  let router = useRouter();
  const onPressFunction = () => {
    console.log("Pressd!!");
    router.push("/InnerChat");
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <MessageCard
              onpress={onPressFunction}
              name={item?.name}
              time={item?.time}
              msg={item?.msg}
              image={item?.image}
              msgCount={item?.msgcount}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Chat;
