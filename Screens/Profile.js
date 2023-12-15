import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import { CameraIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import CustomPlaceholder from "../Components/CustomPlaceHolder";
import CustomRadioButton from "../Components/CustomRadioButton";
import ProfilePicturePicker from "../Components/ProfilePicturePicker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";


var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function Profile() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("");
  const [TimeofBirth, setTimeofBirth] = useState(new Date());
  const handleTimeOfBirthChange = (date) => {
    setTimeofBirth(date);
  };
  const [AlternateNo, setAlternateNo] = useState("");
  const [Gender, setGender] = useState("<");

  const handleImagePicker = () => {
    const options = {
      title: "Select Profile Picture",
      cancelButtonTitle: "Cancel",
      takePhotoButtonTitle: "Take Photo",
      chooseFromLibraryButtonTitle: "Choose from Library",
      mediaType: "photo",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // User canceled the image picker
      } else if (response.error) {
        // Error occurred while picking the image
        Alert.alert("Error", response.error);
      } else {
        // Image successfully picked or taken
        setProfilePicture(response.uri);
      }
    });
  };

  const handleCameraIconPress = () => {
    Alert.alert(
      "Choose an action",
      "",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Take Photo",
          onPress: () =>
            launchCamera({ mediaType: "photo" }, handleImagePicker),
        },
        {
          text: "Choose from Library",
          onPress: () =>
            launchImageLibrary({ mediaType: "photo" }, handleImagePicker),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View className="bg-[#1B1B1B] flex justify-start h-[100%]">
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="Light" />
        <View className="px-5 py-16 flex-row items-center gap-4">
          <ArrowLeftCircleIcon size="36" color="white" />
          <Text className="text-white text-xl font-bold">My Profile</Text>
        </View>
      </SafeAreaView>

      <View className="flex items-center mb-12">
        <View className="flex items-center pl-40 pt-28">
          <TouchableOpacity
            className="bg-[#1B1B1B] relative z-30 rounded-full p-2"
            onPress={handleCameraIconPress}
          >
            <CameraIcon size="28" color="white" />
          </TouchableOpacity>
          <View className=" absolute z-10 items-center justify-center overflow-hidden w-48 h-48 border-2 border-gray-400 rounded-full ">
            <ProfilePicturePicker
              profilePicture={profilePicture}
              onSelectImage={handleImagePicker}
            />
            <LinearGradient
              colors={["#D9D9D9", "rgba(217, 217, 217, 0.00)"]}
              style={{ width, height: height * 0.41 }}
              start={{ x: 0.5, y: 0.2 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        </View>
      </View>
      <View className="flex items-center justify-center mb-8">
        <Text className="text-white text-xl font-semibold">{username}</Text>
        <Text className="text-white text-sm font-normal"> +91-6978345210</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 16 }}
        className="bg-white h-full w-full"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="p-8">
          <CustomPlaceholder title="Username" field={username} />
          <View>
            <CustomRadioButton />
          </View>
          <CustomPlaceholder title="Email" field={email} />
          <CustomPlaceholder
            title="Time of Birth"
            field={TimeofBirth}
            onDateChange={handleTimeOfBirthChange}
          />
          <CustomPlaceholder title="Alternate Phone No" field={AlternateNo} />
        </View>
        <TouchableOpacity className="mx-6 mb-4 py-4 bg-zinc-900 rounded-2xl ">
          <Text className="text-white text-base font-semibold text-center">
            Update
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
