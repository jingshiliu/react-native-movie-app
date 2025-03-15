import { Stack, Tabs } from "expo-router";
import { ImageBackground, Image, Text } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import React from "react";
import TabsNode from "@/components/tabs-node";

// more like configuration file
// add stack.screen or like register each screen like former mentioned automatically,
//put them into this file only if using customized property, like
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabsNode focused={focused} source={icons.home} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabsNode focused={focused} source={icons.search} label="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabsNode focused={focused} source={icons.save} label="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabsNode focused={focused} source={icons.person} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
