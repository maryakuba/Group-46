import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const Icons = ({
  text,
  Icon,
  onPress,
}: {
  text: string;
  Icon: any;
  onPress: any;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="h-52 w-36 border-[1px] rounded-lg mx-3 border-primary flex justify-center items-center">
        {Icon}
        <Text className="text-primary text-2xl">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Icons;
