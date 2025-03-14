import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Href, useRouter } from "expo-router";
import { icons } from "@/components/constants/icon";

const ProfileScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    console.log("User logged out!");
    router.push("/login");
  };

  interface IProfileOptionProps {
    icon: string;
    text: string;
    routerUrl?: Href;
  }

  const ProfileOption: React.FC<IProfileOptionProps> = ({
    icon,
    text,
    routerUrl,
  }) => (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => {
        if (routerUrl && typeof routerUrl === "string") {
          router.push(routerUrl);
        }
      }}
    >
      {/* <Feather name={icon} size={20} color="#333" /> */}
      {icons[icon]({ size: 20, color: "#333" })}
      <Text style={styles.optionText}>{text}</Text>
      {icons.forward({ size: 20, color: "#ccc" })}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          {icons.camera({ size: 16, color: "#fff" })}
        </TouchableOpacity>
        <Text style={styles.profileName}>Albert Stevano Bajefski</Text>
        <Text style={styles.profileEmail}>Albertstevano@gmail.com</Text>
      </View>

      {/* My Orders */}
      <View style={styles.orderCard}>
        <View style={styles.orderHeader}>
          <Text style={styles.orderTitle}>My Orders</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orderId}>Order ID 88833777</Text>
        <View style={styles.orderContent}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uTZEHO2xIsySDcVVyi5YxF3lKkd1igvt_1Ix8Sm5q6d6Spoj6eXhTn6P1itH_U_VPGY&usqp=CAU",
            }}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>Burger With Meat</Text>
            <Text style={styles.foodPrice}>$12,230</Text>
          </View>
          <View style={styles.orderStatus}>
            <Text style={styles.statusText}>In Delivery</Text>
          </View>
        </View>
      </View>

      {/* Profile Options */}
      <View style={styles.section}>
        <ProfileOption
          icon="userOutline"
          text="Personal Data"
          routerUrl="/personal-data"
        />
        <ProfileOption icon="settings" text="Settings" routerUrl="/settings" />
        <ProfileOption icon="creditCard" text="Extra Card" />
      </View>

      {/* Support Options */}
      <View style={styles.section}>
        <ProfileOption
          icon="helpCircle"
          text="Help Center"
          routerUrl="/help-center"
        />
        <ProfileOption icon="trash" text="Request Account Deletion" />
        <ProfileOption icon="userOther" text="Add another account" />
      </View>

      {/* Sign Out */}
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() => setModalVisible(true)}
      >
        {icons.logOut({ size: 20, color: "red" })}
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Popup Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              {icons.close({})}
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Sign Out</Text>
            <Text style={styles.modalMessage}>Do you want to log out?</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.logoutText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cameraIcon: {
    position: "absolute",
    top: 70,
    right: "40%",
    backgroundColor: "#FF8A00",
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: "#777",
  },
  orderCard: {
    backgroundColor: "white",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#FF8A00",
    fontSize: 16,
    fontWeight: "bold",
  },
  orderId: {
    fontSize: 14,
    color: "#888",
  },
  orderContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  foodDetails: {
    flex: 1,
    marginLeft: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  foodPrice: {
    fontSize: 16,
    color: "#FF8A00",
    fontWeight: "bold",
  },
  orderStatus: {
    backgroundColor: "#fe8c01",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    color: "#fff",
  },
  section: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#FFF5F5",
  },
  signOutText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalMessage: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    marginRight: 10,
  },
  cancelText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#F6A623",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
