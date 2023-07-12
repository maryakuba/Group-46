import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "../components/icons";
import { Foundation } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex justify-center items-center">
        <Text className="text-3xl font-medium text-primary">
          BMI Calculator
        </Text>
      </View>

      <View className="flex justify-center flex-row mt-10">
        <Icons
          Icon={
            <Foundation
              className=""
              name="female-symbol"
              size={100}
              color="#2465C2"
            />
          }
          text="FEMALE"
        />
        <Icons
          Icon={<Foundation name="male-symbol" size={100} color="#2465C2" />}
          text="MALE"
        />
      </View>

      <View className="flex items-center mt-20 bg-primary h-44 rounded-lg mx-16 pt-10">
        <Text className="text-2xl text-white">
          HEIGHT<Text className="text-sm">cm</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
