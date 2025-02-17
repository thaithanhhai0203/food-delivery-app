import { useRouter } from "expo-router";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { icon } from "@/components/constants/icon";
import { color } from "@/components/constants/color";
import avatar from "@/assets/images/profile/user1/avatar.png";
import background from "@/assets/images/chat-list/background.png";

const ChatScreen = () => {
  const router = useRouter();
  return (
    <ImageBackground source={background} style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Chat List
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        All Message
      </Text>

      <View style={styles.messageContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={avatar} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Geopart Etdsien
            </Text>
            <Text style={{ fontSize: 18, color: "#999" }}>
              Your Order Just Arrived!
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ marginBottom: 5 }}>13:47</Text>
          {icon.checkDone({ color: color.primary.main })}
        </View>
      </View>

      <View style={styles.messageContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={avatar} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Geopart Etdsien
            </Text>
            <Text style={{ fontSize: 18, color: "#999" }}>
              Your Order Just Arrived!
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ marginBottom: 5 }}>13:47</Text>
          <Text
            style={{
              fontSize: 15,
              backgroundColor: color.primary.main,
              color: "#fff",
              width: 20,
              height: 20,
              borderRadius: 50,
              textAlign: "center",
              lineHeight: 20,
            }}
          >
            3
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
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
});
