import imagePath from "@/src/constants/imagePath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate_to_terms_agree = () => {
    router.push("/(auth)/terms_agree");
  };

  let loading_timeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_terms_agree, 3000);
  };

  useEffect(() => {
    const timeout = setTimeout(loading_timeout, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo_style}
          resizeMode="contain"
        />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>from</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",

    height: verticalScale(80),
    justifyContent: "flex-end",
  },
  from_text: {
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
  
  },
  logo_style: {
    width: moderateScale(70),
    height: moderateScale(70),
  },

  whatsapp_text: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
  },
  loading_text: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "#00A884",
    marginTop: verticalScale(10),
  },
});
