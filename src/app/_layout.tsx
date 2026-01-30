
import React, { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { storage } from "../utils/utils";

SplashScreen.preventAutoHideAsync();
const RootNavigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  // splash screen hide
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);
  useEffect(() => {
    // check user auth
    const checkAuth = async () => {
      // this line for testing when I want to loggout  and clear my token
      // when I make logout btn so I will use this
      // await storage.delete("accessToken");

      const accessToken = await storage.getString("accessToken");
      console.log("accessToken", accessToken);

      if (accessToken) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

export default RootNavigation;
