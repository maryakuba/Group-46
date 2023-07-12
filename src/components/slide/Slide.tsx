import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const logo = require("../../assets/splash.png");
import { data } from ".";

const Slide = ({
  img,
  heading,
  text,
  OnNext,
  activeIndex,
}: {
  img: any;
  heading: string;
  text: string;
  OnNext: any;
  navigation: any;
  activeIndex: number;
}) => {
  // console.log(navigation);
  return (
    <Fragment>
      <View className="flex-1 relative">
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
          <View className="flex justify-between flex-1">
            <View className="flex-1">
              <SafeAreaView
                style={styles.topItems}
                className="flex flex-row gap-x-2 mt-5 justify-center"
              >
                {data.map((item, index) => (
                  <View
                    key={index}
                    className={`w-20 h-[1px] ${
                      activeIndex === index ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </SafeAreaView>
              <View className="flex items-center mt-7 w-screen">
              <Text className="text-white text-3xl">FinaBank</Text>
              </View>
            </View>

            <View className="flex-1 justify-end pb-14 gap-y-14">
              <View className="w-full px-4">
                <Text className="text-white text-3xl font-bold">{heading}</Text>
                <Text className="text-gray-200">{text}</Text>
              </View>

              <View className="px-4">
                <TouchableOpacity
                  className="bg-primary rounded-md w-full h-14 flex items-center justify-center"
                  onPress={() => {
                    OnNext();
                  }}
                >
                  <Text className="text-2xl text-white font-medium">Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Fragment>
  );
};

{
}

const styles = StyleSheet.create({
  topItems: {
    position: "relative",
    zIndex: 20,
  },

  image: {
    flex: 1,
  },
});

export default Slide;
