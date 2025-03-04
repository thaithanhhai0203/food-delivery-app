import React from "react";
import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { icon } from "@/components/constants/icon";
import { color } from "@/components/constants/color";
import avatar from "@/assets/images/profile/user1/avatar.png";
import background from "@/assets/images/chat-list/background.png";

const ChatScreen = () => {
  const router = useRouter();
  const messages = [
    {
      id: 1,
      name: "Geopart Etdsien",
      avatar,
      message: "Your Order Just Arrived!",
      time: "13:47",
      unread: 0,
      status: "seen",
    },
    {
      id: 2,
      name: "Geopart Etdsien",
      avatar,
      message: "Your Order Just Arrived testtesttesttest!",
      time: "13:47",
      unread: 3,
      status: "unseen",
    },
    {
      id: 3,
      name: "Geopart Etdsien",
      avatar,
      message: "Your Order Just Arrived!",
      time: "13:47",
      unread: 0,
      status: "received",
    },
  ];

  const handleChatDetail = (id: number) => {
    router.push({
      pathname: "/chat-detail/[id]",
      params: { id },
    });
  };
  return (
    <ImageBackground source={background} style={styles.container}>
      <Text style={styles.title}>Chat List</Text>

      <Text style={styles.subTitle}>All Message</Text>

      {messages.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleChatDetail(item?.id)}
          style={styles.messageContainer}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={item?.avatar} />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item?.name}
              </Text>

              <Text
                style={{
                  width: 200,
                  fontSize: 18,
                  color: item?.unread > 0 ? "#000" : "#999",
                  fontWeight: item?.unread > 0 ? "bold" : "normal",
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item?.message}
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ marginBottom: 5 }}>{item?.time}</Text>

            {item?.unread === 0 && item?.status === "seen" ? (
              icon.checkDone({ color: color.primary.main })
            ) : item?.unread > 0 && item?.status === "unseen" ? (
              <Text style={styles.textUnread}>3</Text>
            ) : (
              ""
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageContainer: {
    width: "100%",
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textUnread: {
    fontSize: 15,
    backgroundColor: color.primary.main,
    color: "#fff",
    width: 20,
    height: 20,
    borderRadius: 50,
    textAlign: "center",
    lineHeight: 20,
  },
});
