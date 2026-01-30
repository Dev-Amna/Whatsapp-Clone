import { View } from "react-native";
import React, { useState } from "react";
import Chat from "@codsod/react-native-chat";
import colors from "@/src/styles/colors";

const InnerChat = () => {
  const [messages, setMessages] = useState<any>([
    {
      _id: 1,
      text: "Hello",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "asia",
      },
    },
  ]);
  const OnSendMessage = (text: string) => {
    setMessages((prevMessages: any) => [
      {
        _id: prevMessages.length + 1,
        text,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "amna ashraf",
        },
      },
      ...prevMessages,
    ]);
  };
  return (
    <View style={{ flex: 1 }}>
      <Chat
        messages={messages}
        setMessages={(val) => OnSendMessage(val)}
        themeColor={colors.primary}
        themeTextColor={colors.white}
        showSenderAvatar={false}
        placeholder="Message"
        inputBorderColor={colors.primary}
        backgroundColor={colors.primary}
        user={{
          _id: 1,
          name: "amna ashraf",
        }}
      />
    </View>
  );
};

export default InnerChat;
