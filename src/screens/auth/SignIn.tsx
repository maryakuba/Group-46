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
import Axios from "axios";

//pick country code from text view

const SignUp = ({ navigation }: any) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async () => {
    /// make request to backedn using axios
    const response = await Axios.post(
      "https://hack-server-9750e7b319fd.herokuapp.com/auth/signin",
      {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        fullName: fullName,
      }
    );

    navigation.navigate("VerifyPhone");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "space-between",
          marginTop: 20,
        }}
      >
        <View className="ml-2">
          <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Sign in</Text>
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
        <View className="gap-y-2 ml-2" style={{ marginBottom: 18 }}>
          <Text
            className="font-medium"
            style={{ fontSize: 20, marginLeft: 10 }}
          >
            Sign in
          </Text>
          <Text style={{ fontSize: 17, marginLeft: 10, color: "#6B7280" }}>
            Enter your details to continue
          </Text>
        </View>

        <View className="flex gap-y-3">
          <View>
            <View className="ml-6" style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "300", fontSize: 15 }}>
                Email or Mobile Number
              </Text>
            </View>

            <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
              <TextInput
                className="pl-3 border-gray-300"
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
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View>
            <View className="ml-6" style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "300", fontSize: 15 }}>Password</Text>
            </View>

            <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
              <TextInput
                className="pl-3 border-gray-300"
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
                keyboardType="number-pad"
              />
            </View>
          </View>
        </View>

        <View className="px-6" style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            className="w-full"
            onPress={handleSubmit}
            style={{
              height: 50,
              backgroundColor: "#15803D",
              borderRadius: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={navigation.navigate("SignUp")}>
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#15803D",
                fontSize: 18,
              }}
            >
              Sign up
            </Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
});

export default SignUp;
