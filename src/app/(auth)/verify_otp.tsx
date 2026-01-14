import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "@/src/components/atom/ButtonComp";
import OTPInput from "@codsod/react-native-otp-input";

import { storage } from "../../utils/utils";

function Verify_otp() {
  const [otp, setOTP] = useState();
  const onPress = async () => {
    console.log(otp);
    let token = "demo_token_1012112";

       await storage.setString("accessToken", token);

  };
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.head}>
        <AntDesign name="arrow-left" style={styles.backBtn} />
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>

      {/* body */}
      <View style={styles.body}>
        <Text style={styles.otpText}>Code has been send to +91 11******44</Text>
        <OTPInput
          style={styles.otpContainer}
          length={4}
          onOtpComplete={(txt: string) => setOTP(txt)}
          inputStyle={styles.otpInput}
        />
        <Text style={styles.resendText}>
          Resend Code in <Text style={styles.counterText}>56</Text> s
        </Text>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <ButtonComp
          btn="Verify"
          onpress={onPress}
          style={styles.verifyButton}
        />
      </View>
    </SafeAreaView>
  );
}

export default Verify_otp;
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    flex: 1,
    justifyContent: "space-between",
    paddingTop: moderateScale(30),
  },

  head: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  backBtn: {
    fontSize: moderateScale(24),
    color: "black",
    fontWeight: "bold",
  },
  headTitle: {
    fontSize: moderateScale(24),
    color: "black",
    fontWeight: "bold",
  },
  body: {
    alignItems: "center",
    gap: verticalScale(25),
  },
  counterText: {
    color: "#00A884",
  },
  otpText: {
    fontSize: moderateScale(16),
    color: "black",
    fontWeight: "400",
  },
  resendText: {},

  footer: {},
  verifyButton: {
    borderRadius: moderateScale(50),
  },
  otpInput: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: moderateScale(15),
    borderColor: "black",
  },
  otpContainer: {
    gap: moderateScale(12),
  },
});
