import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "../components/icons";
import { Foundation } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Weight from "../components/card/weight";
import Age from "../components/card/age";
import Female from "../components/card/female";
import Male from "../components/card/male";
import { StatusBar } from "expo-status-bar";
import calculateBMI from "../services/bmi";
import { useBMI } from "../services/context";

const Home = ({ navigation }: any) => {
  const [gender, setGender] = useState("");
  let [age, setAge] = useState(0);
  let [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const { state, dispatch } = useBMI();

  const handleSubmit = () => {
    const results = calculateBMI(gender, weight, age, height);
    dispatch({ type: "SET_BMI", bmi: results });

    navigation.navigate("Results");
  };

  return (
    <>
      <StatusBar style="dark" backgroundColor="#2465C2" />
      <ScrollView>
        <SafeAreaView className="flex-1">
          <View className="flex justify-center items-center mt-4">
            <Text className="text-3xl font-medium text-primary">
              BMI Calculator
            </Text>
          </View>

          <View className="flex justify-center flex-row mt-10">
            <Female
              gender={gender}
              onPress={() => {
                setGender("female");
              }}
            />
            <Male
              gender={gender}
              onPress={() => {
                setGender("male");
              }}
            />
          </View>

          <View className="flex justify-between  items-center mt-6 bg-primary h-44 rounded-lg mx-14 pt-10">
            <Text className="text-2xl text-white">
              HEIGHT<Text className="text-sm">cm</Text>
            </Text>
            <Text className="text-xl text-white">{height.toFixed(1)}</Text>
            <Slider
              thumbTintColor="#FF0000"
              style={{ width: 200, height: 40, marginBottom: 20 }}
              minimumValue={1}
              maximumValue={500}
              onValueChange={(value) => setHeight(value)}
              minimumTrackTintColor="#FFF"
              maximumTrackTintColor="#FFF"
            />
          </View>

          <View className="flex flex-row rounded-lg mx-12 pt-10">
            <Weight weight={weight} setWeight={setWeight} />
            <Age age={age} setAge={setAge} />
          </View>

          <View
            className="px-10 pt-5 mb-10"
            style={{ alignItems: "center", marginTop: 20 }}
          >
            <TouchableOpacity
              className="w-full bg-primary"
              onPress={handleSubmit}
              style={{
                height: 60,
                borderRadius: 5,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Calculate</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Home;
