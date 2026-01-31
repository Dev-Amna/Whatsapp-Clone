import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import MessageCard from "./MessageCard";
import { data } from "../../../data/chatData";
import { useRouter } from "expo-router";
import imagePath from "@/src/constants/imagePath";

const Chat = () => {
  let router = useRouter();
  const onPressFunction = (item :any) => {
    console.log("Pressd!!");
    router.push({
      pathname: "/InnerChat",
      params: {
        namePerson: item.name,
        dp: item.image,
      },
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <MessageCard
              onpress={() => onPressFunction(item)}
              name={item?.name}
              time={item?.time}
              msg={item?.msg}
              image={imagePath[item.image]}
              msgCount={item?.msgcount}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Chat;
