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
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import { CameraIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import CustomPlaceholder from "../Components/CustomPlaceHolder";
import CustomRadioButton from "../Components/CustomRadioButton";
import * as ImagePicker from 'expo-image-picker';



const ProfilePicturePicker = ({ profilePicture, onSelectImage }) => {
  const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'ios' || Platform.OS === 'android') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setMediaLibraryPermission(status === 'granted');
      }
    })();
  }, []);

  const handleImagePicker = async () => {
    if (!mediaLibraryPermission) {
      Alert.alert('Permission Denied', 'Please enable media library access in your device settings.');
      return;
    }

    const options = {
      mediaType: 'photo',
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.cancelled) {
      onSelectImage(result.uri);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePicker}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} className="w-full h-full rounded-full" />
        ) : (
          <LinearGradient
            colors={['#D9D9D9', 'rgba(217, 217, 217, 0.00)']}
            style={{ width: '100%', height: '100%', borderRadius: 50 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

var { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

export default function Profile() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState('Username');
  const [email, setEmail] = useState('');
  const [TimeofBirth, setTimeofBirth] = useState(new Date());
  const handleTimeOfBirthChange = (date) => {
    setTimeofBirth(date);
  };
  const [AlternateNo, setAlternateNo] = useState('');
  const [Gender, setGender] = useState('<');

  const handleImagePicker = async () => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please enable media library access in your device settings.');
        return;
      }
    }

    const options = {
      mediaType: 'photo',
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  const handleCameraIconPress = () => {
    Alert.alert(
      'Edit Profile',
      '',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Camera',
          onPress: () => handleCamera(),
        },
        {
          text: 'Gallery',
          onPress: () => handleImagePicker(),
        },
      ],
      { cancelable: false }
    );
  };

  const handleCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please enable camera access in your device settings.');
      return;
    }

    const options = {
      mediaType: 'photo',
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    };

    const result = await ImagePicker.launchCameraAsync(options);

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
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
          <ProfilePicturePicker profilePicture={profilePicture} onSelectImage={setProfilePicture} />
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
