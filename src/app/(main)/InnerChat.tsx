import { Alert, View } from "react-native";
import React, { useState } from "react";
import Chat from "@codsod/react-native-chat";
import colors from "@/src/styles/colors";
import imagePath from "@/src/constants/imagePath";
import ChatHeader from "@/src/components/atom/ChatHeader";
import { useLocalSearchParams } from "expo-router";
import chatMessages from "@/src/data/chatMessages";

const InnerChat = () => {


  const {id, namePerson, dp} = useLocalSearchParams();
  const userImage = imagePath[dp];
  const [messages, setMessages] = useState<any>(
   chatMessages[id] || []
    
  );
  const OnSendMessage = (text: string) => {
    const message = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "amna ashraf",
      },
    };
    setMessages((prevMessages: any) => 
    {
      const update = [message, ...prevMessages];
      chatMessages[id] = update;
      return update;
    }
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ChatHeader id={id} namePerson={namePerson} dp={userImage}/>
      <Chat
        messages={messages}
        setMessages={(val) => OnSendMessage(val)}
        themeColor={colors.primary}
        themeTextColor={colors.white}
        showReceiverAvatar={false}
        showSenderAvatar={false}
        placeholder="Message"
        inputBorderColor={colors.primary}
        backgroundColor={colors.primary}
        backgroundImage={imagePath.dark_bg_image}
        showEmoji={true}
        onPressEmoji={() => Alert.alert("You Press Emoji Icon!!")}
        showAttachment={true}
        onPressAttachment={() => Alert.alert("You Press Attachment Icon!!")}
        user={{
          _id: 1,
          name: "amna ashraf",
        }}
      />
    </View>
  );
};

export default InnerChat;
