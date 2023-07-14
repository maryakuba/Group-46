import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useBMI } from "../services/context";

const Results = ({ navigation }: any) => {
  const { state, dispatch } = useBMI();
  const [leghtExceeded, setLengthExceeded] = useState(false);

  const category = state.bmi.category;
  console.log(category.length);

  useEffect(() => {
    if (state.bmi.category.length > 8) {
      setLengthExceeded(true);
    }
  }, []);
  return (
    <>
      <StatusBar style="dark" backgroundColor="#2465C2" />

      <SafeAreaView style={styles.container}>
        <View className="flex flex-row items-center w-screen mt-5">
          <TouchableOpacity
            style={{ left: 16, top: 1 }}
            className=" absolute z-10 "
            onPress={() => navigation.goBack()}
          >
            <View className="">
              <Ionicons
                className=""
                name="arrow-back"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 25 }}
            className="flex-grow text-primary font-bold tracking-widest  text-center text-base"
          >
            Results
          </Text>
        </View>
        <View className="flex gap-y-9  items-center mt-16 bg-primary h-96 rounded-2xl mx-14 pt-10 ">
          <Text
            className={
              !leghtExceeded
                ? `text-5xl font-medium text-white`
                : `text-xl font-medium text-white`
            }
          > 
            {state.bmi.category}
          </Text>
          <Text className="text-7xl font-medium text-white">
            {state.bmi.bmi}
          </Text>
          <Text className=" text-white text-center w-1/2">
            Lorem ipsum dolor sit amet consectetur. Sed aliquam sit tempus elit
            sem orci urna fames augue.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Results;
