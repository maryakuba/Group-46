import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

//pick country code from text view

const SignIn = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    /// make request to backedn using axios

    navigation.navigate("Home");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const [fontsLoaded] = useFonts({
    Manrope: require("../../../assets/fonts/Manrope/static/Manrope-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#2465C2" />

      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "space-between",
            marginTop: 20,
          }}
        >
          <View className="flex gap-y-2">
            <View className="flex  flex-row items-center w-screen">
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
                style={{ fontSize: 20 }}
                className="flex-grow text-center text-base"
              >
                Sign In
              </Text>
            </View>

            <View className="flex justify-center items-center w-screen">
              <Text className="text-gray-500 text-center pl-4">
                Provide your details to complete
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {/* <Text style ={{fontSize:20}}>Create Account</Text> */}
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            flex: 1,
            alignContent: "center",
            marginTop: 50,
          }}
        >
          <View className="flex gap-y-3">
            <View>
              <View className="ml-6" style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "300", fontSize: 15 }}>Email</Text>
              </View>

              <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
                <TextInput
                  className="pl-3 rounded-lg border-gray-300"
                  placeholder="example@domain.com"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: "#E5E7EB",
                    width: "100%",
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                  keyboardType="default"
                />
              </View>
            </View>

            <View>
              <View className="ml-6" style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "300", fontSize: 15 }}>
                  Password
                </Text>
              </View>

              <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
                <TextInput
                  className="pl-3 rounded-lg border-gray-300"
                  placeholder="password"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: "#E5E7EB",
                    width: "100%",
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                  keyboardType="default"
                />
              </View>
            </View>
          </View>

          <View
            className="px-6"
            style={{ alignItems: "center", marginTop: 20 }}
          >
            <TouchableOpacity
              className="w-full bg-primary"
              onPress={handleSubmit}
              style={{
                height: 50,
                borderRadius: 5,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-x-2 justify-center items-center mt-8">
            <Text className="font-normal text-gray-500 text-base">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={navigateToSignUp}>
              <Text className="text-base text-primary ">Sign up</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignContent: "center",
              marginBottom: 30,
            }}
          ></View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
});

export default SignIn;
