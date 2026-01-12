import { View, Text, StyleSheet, BackHandler } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "@/src/components/atom/ButtonComp";

const Verify_otp = () => {
  const [otp, setOtp] = useState();
  const onPress = () => {};
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
        <Text style={styles.resendText}>Resend Code in <Text style={styles.counterText}>56</Text> s</Text>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <ButtonComp
          btn="Verify"
          onPress={onPress}
          style={styles.verifyButton}
        />
      </View>
    </SafeAreaView>
  );
};

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
    gap: verticalScale(25)
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
});
