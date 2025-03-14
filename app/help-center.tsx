import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { icons } from "@/components/constants/icon";

const helpTopics = [
  {
    id: "1",
    title: "General",
    description: "Basic question about Restate",
    icon: "grid",
    color: "#6C4CF8",
  },
  {
    id: "2",
    title: "Sellers",
    description: "All you need to know about selling your home to Restate",
    icon: "cash",
    color: "#F6A623",
  },
  {
    id: "3",
    title: "Buyers",
    description: "Everything you need to know about buying with Restate",
    icon: "cart",
    color: "#E84C4F",
  },
  {
    id: "4",
    title: "Agents",
    description: "How buying agents and listing agents can work with Restate",
    icon: "person",
    color: "#4A90E2",
  },
];

const HelpCenterScreen = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        {icons.back({color: "#000" })}
      </TouchableOpacity>
      <Text style={styles.header}>Help Center</Text>
      <Text style={styles.subHeader}>Hi, how we can help you?</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        {icons.search({size: 20,color: "#888"})}
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Help Topics List */}
      <FlatList
        data={helpTopics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            {icons[item?.icon]({ color: item.color, style: styles.icon })}
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default HelpCenterScreen;
