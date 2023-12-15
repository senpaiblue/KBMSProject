import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import profileDefault from "../assets/Default.jpg";

const { width, height } = Dimensions.get("window");

const ProfilePicturePicker = ({ profilePicture, onSelectImage }) => {
  return (
    <View>
      <TouchableOpacity onPress={onSelectImage}>
        {profilePicture ? (
          <Image
            source={{ uri: profilePicture }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        ) : (
          <LinearGradient
            colors={["#D9D9D9", "rgba(217, 217, 217, 0.00)"]}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicturePicker;
