import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
import imagePath from "@/src/constants/imagePath";
import ButtonComp from "@/src/components/atom/ButtonComp";
import { router } from "expo-router";

const TermsAgree = () => {
  const navigate_to_opt = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image
          source={imagePath.welcome}
          style={styles.image_style}
          resizeMode="contain"
        />
        <Text style={styles.dec_text}>
          Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap
          “Agree and continue” to accept the
          <Text style={styles.link_text}>Teams of Service.</Text>
        </Text>
        <View style={styles.btn_container}>
          <ButtonComp btn={"AGREE AND CONTINUE"} onpress={navigate_to_opt} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>from</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsAgree;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(20),
  },
  header: {
    alignItems: "center",
    gap: 30,
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    color: "#867373",
    fontSize: moderateScale(12),
  },
  facebook_text: {
    fontSize: moderateScale(15),
    textTransform: "uppercase",
    fontWeight: "500",
  },
  welcome_text: {
    fontSize: moderateScale(30),
    color: "#000",
    fontWeight: "bold",
    marginBottom: verticalScale(10)
  },
  image_style: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  dec_text: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: "black",
  },
  link_text: {
    color: "#0C42CC",
  },
  btn_container: {
    width: moderateScale(300),
  },
});
