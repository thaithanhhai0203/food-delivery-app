import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  GiftedChat,
  IMessage,
  InputToolbarProps,
} from "react-native-gifted-chat";
import background from "@/assets/images/chat-list/background.png";
import avatar from "@/assets/images/profile/user1/avatar.png";
import { ImageBackground } from "react-native";
import { icons } from "@/components/constants/icon";
import { colors } from "@/components/constants/color";
import { useRouter } from "expo-router";

const ChatDetailScreen = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Xin chào!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Admin",
          avatar,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
    setInputText("");
  }, []);

  return (
    <ImageBackground source={background} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <TouchableOpacity style={styles.icon} onPress={() => router.back()}>
          {icons.back({ size: 25 })}
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Geopart Etdsien
        </Text>
        <TouchableOpacity style={styles.icon}>
          {icons.phone({ size: 25 })}
        </TouchableOpacity>
      </View>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        alwaysShowSend={true}
        user={{ _id: 1 }}
        renderInputToolbar={(props: InputToolbarProps<IMessage>) => {
          // console.log("props", props.messages);
          console.log("props.text", props);
          return (
            <View style={styles.customInputToolbar}>
              <TextInput
                style={styles.input}
                placeholder="Type a message..."
                value={inputText}
                onChangeText={setInputText}
              />
              <TouchableOpacity
                onPress={() => {
                  if (inputText.trim().length > 0) {
                    onSend([
                      {
                        _id: Math.random().toString(),
                        text: inputText,
                        createdAt: new Date(),
                        user: { _id: 1 },
                      },
                    ]);
                    setInputText("");
                  }
                }}
                style={styles.sendButton}
              >
                {icons.send({ size: 30, color: "#fff" })}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </ImageBackground>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  customInputToolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingLeft: 10,
  },
  sendButton: {
    backgroundColor: colors.primary.main,
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginBottom: 5,
    marginRight: 5,
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
  },
});
