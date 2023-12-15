// CustomPlaceholder.js
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import DateTimePicker from './DateTime'; // Import the DateTimePicker component

const CustomPlaceholder = ({ title }) => {
  const [field, setField] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date()); // New state for date selection

  const handleTextChange = (text) => {
    setField(text);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View className="mb-12">
      <Text className="font-semibold text-[16px] mb-2">{title + '*'}</Text>

      {title.toLowerCase().includes('time') ? ( // Check if the title includes 'time'
        <DateTimePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      ) : (
        <TextInput
          placeholder={`Enter ${title}`}
          className="border-b border-neutral-400 py-2.5 text-neutral-800 text-sm font-normal"
          value={field}
          onChangeText={handleTextChange}
        />
      )}
    </View>
  );
};

export default CustomPlaceholder;
