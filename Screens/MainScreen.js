import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MainBg from "../assets/MainScreen.jpg";
import { useNavigation } from "@react-navigation/native";

export default function MainScreen() {
  const navigation= useNavigation()
  return (
    <ImageBackground source={MainBg} className="flex-1">
      <StatusBar style="light" />
      <View className=" flex-1">
        <View className="flex mx-16 mt-24">
          <Text className="text-white text-6xl font-bold mt-4">kBMS </Text>
          <Text className="text-white text-6xl font-bold mt-4">InfoTech </Text>
        </View>
        <TouchableOpacity className="mx-12 mb-4 py-4 bg-zinc-900 rounded-2xl mt-16" onPress={()=>navigation.navigate("Profile")}>
          <Text className="text-white text-base font-semibold text-center">
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
