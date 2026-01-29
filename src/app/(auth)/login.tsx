import ButtonComp from "@/src/components/atom/ButtonComp";



import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName] = useState("Pakistan");
  const [countryCode, setCountryCode] = useState("+ 92");
  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_con}>
          <Text style={styles.heading_text}>Enter your phone number</Text>
          <Text style={styles.dec_text}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_dec}> What’s my number?</Text>
          </Text>
        </View>

        <View style={styles.input_main_container}>
          <TouchableOpacity
            style={styles.dropDown_container}
            onPress={() => setVisible(true)}
          >
            <View></View>
            <Text style={styles.dropDown_title}>{countryName}</Text>
            <AntDesign
              name="caret-down"
              size={moderateScale(14)}
              color="black"
            />
          </TouchableOpacity>
          <View style={styles.horizontal_line} />
          {/* Input container */}
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your contact number :"
              />
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <ButtonComp
          btn={"next"}
          style={{ paddingHorizontal: scale(20) }}
          onpress={onNextButtonClick}
        />
      </View>
      {visible && (
        <CountryPicker
          visible={true}
          onClose={() => setVisible(false)}
          onSelect={(e :any) => {
            setCountryCode(`+${e.callingCode[0]} `);
            setCountryName(e.name);
          }} 
        />
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(50),
    paddingHorizontal: scale(40),
  },
  header: {
    gap: verticalScale(50),
  },
  header_con: {
    gap: verticalScale(20),
  },
  input_main_container: {},
  input_container: {
    flexDirection: "row",
    gap: scale(20),
    alignItems: "center",
    paddingVertical: verticalScale(12),
  },
  country_code: {
    gap: verticalScale(10),
  },
  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
    paddingVertical: verticalScale(10),
  },
  input: {
    fontSize: moderateScale(16),
  },
  footer: {},
  heading_text: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  dec_text: {
    fontSize: moderateScale(13),
    textAlign: "center",
    fontWeight: "400",
    color: "black",
  },

  link_dec: {
    color: "#002AC0",
  },
  horizontal_line: {
    height: 1,
    width: "100%",
    backgroundColor: "#00A884",
  },
  dropDown_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropDown_title: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "black",
  },
});
