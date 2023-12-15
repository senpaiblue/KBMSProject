import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

const ProfilePicturePicker = ({ profilePicture, onSelectImage }) => {
  const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setMediaLibraryPermission(status === 'granted');
    })();
  }, []);

  const handleImagePicker = async () => {
    if (!mediaLibraryPermission) {
      Alert.alert('Permission Denied', 'Please enable media library access in your device settings.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      onSelectImage(result.uri);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePicker}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
        ) : (
          <LinearGradient colors={['#D9D9D9', 'rgba(217, 217, 217, 0.00)']} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicturePicker;
