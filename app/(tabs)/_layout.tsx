import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";

const TabLayout = () => {
    return (
       <Tabs tabBar={props => <TabBar {...props}/>}>
        <Tabs.Screen name="index" options={{title: "Home"}} />
        <Tabs.Screen name="order" options={{title: "Order"}} />
        <Tabs.Screen name="chat" options={{title: "Chat"}} />
        <Tabs.Screen name="profile" options={{title: "Profile"}} />
       </Tabs>
    )
}

export default TabLayout;