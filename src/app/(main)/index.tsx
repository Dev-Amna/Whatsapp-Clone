import Calls from "@/src/components/atom/Molecules/Calls";
import Chat from "@/src/components/atom/Molecules/Chat";
import Status from "@/src/components/atom/Molecules/Status";
import { storage } from "@/src/utils/utils";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const Main = () => {
  const [currentPage, setCurrtentPage] = useState("Chat");
  const [showMenu, setShowMenu] = useState(false);

  const ActivePage = () => {
    switch (currentPage) {
      case "Chat": {
        return <Chat />;
      }
      case "Status": {
        return <Status />;
      }
      case "Calls": {
        return <Calls />;
      }
      default: {
        return <Chat />;
      }
    }
  };

  const menu = () => {
    setShowMenu(!showMenu);
  };

  const WhatsAppHeader = () => {
    return (
      <View style={styles.whatsAppHeaderStyle}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.IconContainer}>
          <Feather name="search" style={styles.headerIcon} />
          <Entypo
            name="dots-three-vertical"
            style={styles.headerIcon}
            onPress={menu}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008069" />;
      <WhatsAppHeader />
      {showMenu && (
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={async () => {
              await storage.delete("accessToken");
            }}
          >
            <Text>Pressed!!!!!</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Chat Pages */}
      <View style={styles.topBarContainer}>
        {["Chat", "Status", "Calls"].map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              setCurrtentPage(item);
              setShowMenu(false);
            }}
            style={[
              styles.topBarButton,
              item === currentPage && { borderBottomColor: "white" },
            ]}
          >
            <Text style={styles.topBarText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {ActivePage()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(12),
    backgroundColor: "#008069",
    gap: scale(10),
  },

  topBarButton: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 3,
    paddingBottom: moderateScale(10),
    borderBottomColor: "#008069",
  },
  topBarText: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  whatsAppHeaderStyle: {
    alignItems: "center",
    backgroundColor: "#008069",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(18),
    paddingTop: verticalScale(10),
  },
  headerTitle: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "white",
  },
  IconContainer: {
    flexDirection: "row",
    gap: scale(12),
  },
  headerIcon: {
    fontSize: moderateScale(24),
    color: "white",
  },
  menuContainer: {
    borderRadius: moderateScale(1),
    backgroundColor: "white",
    width: moderateScale(120),
    height: moderateScale(120),
    alignItems: "center",
    // justifyContent: "space-evenly",

    gap: 12,
    position: "absolute",
    right: 30,
    top: 70,
    zIndex: 999,
    elevation: 10,
  },
  menuItem: {
    paddingVertical: verticalScale(8),
    fontSize: moderateScale(14),
  },
});

export default Main;
