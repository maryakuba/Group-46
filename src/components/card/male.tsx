import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";

const Male = ({ onPress, gender }: { onPress: any; gender: string }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={
          gender === "male"
            ? `h-52 w-36  rounded-lg mx-3 bg-primary flex justify-center items-center`
            : `h-52 w-36 border-[1px] rounded-lg mx-3 border-primary flex justify-center items-center`
        }
      >
        <Foundation
          className=""
          name="male-symbol"
          size={100}
          color={gender === "male" ? `#FFF` : `#2465C2`}
        />
        <Text
          className={
            gender === "male" ? `text-white text-2xl` : `text-primary text-2xl`
          }
        >
          MALE
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Male;
