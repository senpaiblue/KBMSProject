import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import checked from "../assets/checkedBox.jpg";
import unchecked from "../assets/box.jpg";

const CustomRadioButton = () => {
  const [selectedOption, setSelectedOption] = useState('male'); // 'male' or 'female'

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <View className='mb-12'>
      <Text className='mb-2 font-semibold text-[16px]'>Gender*</Text>

      <TouchableOpacity className='flex-row items-center gap-4' onPress={() => handleOptionChange('male')}>
        <Image
          source={selectedOption === 'male' ? checked : unchecked}
          className='mb-2'
          style={{ width: 20, height: 20 }}
        />
        <Text>Male</Text>
      </TouchableOpacity>

      <TouchableOpacity className='flex-row items-center gap-4' onPress={() => handleOptionChange('female')}>
        <Image
          source={selectedOption === 'female' ? checked : unchecked}
          style={{ width: 20, height: 20 }}
        />
        <Text>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;
