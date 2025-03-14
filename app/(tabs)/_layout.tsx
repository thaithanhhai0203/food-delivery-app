import React from "react";
import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="order"
        options={{ title: "Order", headerShown: false }}
      />
      <Tabs.Screen
        name="chat"
        options={{ title: "Chat", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabLayout;
