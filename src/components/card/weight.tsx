import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Weight = ({ setWeight, weight }: { setWeight: any; weight: number }) => {
  const handleIncrease = () => {
    setWeight(weight++);
  };

  const handleDecrease = () => {
    setWeight(weight--);
  };

  return (
    <View className="h-48 w-36  rounded-lg mx-3 bg-primary  flex pt-6 items-center">
      <Text className="text-white text-2xl font-medium">
        WEIGHT <Text className="text-sm">(kg)</Text>
      </Text>
      <Text className="text-white text-3xl font-medium pt-6">{weight}</Text>
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

export default Weight;
