import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Age = ({ setAge, age }: { setAge: any; age: number }) => {
  const handleIncrease = () => {
    setAge(age++);
  };

  const handleDecrease = () => {
    setAge(age--);
  };

  return (
    <View className="h-48 w-36  rounded-lg mx-3 bg-primary  flex pt-6 items-center">
      <Text className="text-white text-2xl font-medium">AGE</Text>
      <Text className="text-white text-3xl font-medium pt-6">{age}</Text>
      <View className="flex pt-6 flex-row gap-x-4">
        <TouchableOpacity onPress={handleDecrease}>
          <View className="rounded-full bg-white w-9 h-9 flex items-center">
            <Text className="text-primary text-3xl  font-bold">-</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIncrease}>
          <View className="rounded-full bg-white w-9 h-9 flex items-center">
            <Text className="text-primary text-3xl  font-bold">+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Age;
