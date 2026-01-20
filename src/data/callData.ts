import { StyleSheet } from "react-native";
import imagePath from "../constants/imagePath";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: moderateScale(23),
    color: "#008069",
    alignItems: "center",
  },
});
export let data = [
  {
    name: "Asia Ashraf",
    time: "5:41 AM",
    image: imagePath.asia,
    iconName: "videocam-sharp",
    iconStyle: styles.iconStyle,
    callLeftIcon  : "arrow-down-left"
  },
  {
    name: "Asia Ashraf",
    time: "5:41 AM",
    image: imagePath.asia,
    iconName: "call-sharp",
    iconStyle: styles.iconStyle,
    callLeftIcon  : "videocam-sharp"
  },
  {
    name: "Zoha",
    time: "4:41 AM",
    image: imagePath.zoha,
    iconName: "videocam-sharp",
    iconStyle: styles.iconStyle,
    callLeftIcon  : "videocam-sharp"
  },
  {
    name: "Sara",
    time: "5:42 AM",
    image: imagePath.sara,
    iconName: "call-sharp",
    iconStyle: styles.iconStyle,
    callLeftIcon  : "videocam-sharp"
  },
  {
    name: "Sana",
    time: "5:45 AM",
    image: imagePath.sana,
    iconName: "call-sharp",
    iconStyle: styles.iconStyle,
  },
  {
    name: "Monsaf Ali",
    time: "5:50 AM",
    image: imagePath.monsaf,
    iconName: "videocam-sharp",
    iconStyle: styles.iconStyle,
  },
  {
    name: "Ashraf",
    time: "Yesterday",
    image: imagePath.ashraf,
    iconName: "call-sharp",
    iconStyle: styles.iconStyle,
  },
 
  {
    name: "Iqra",
    time: "7/1/2025",
    image: imagePath.iqra,
    iconName: "videocam-sharp",
    iconStyle: styles.iconStyle,
  },
  {
    name: "Fatima Sister",
    time: "6/1/2026",
    image: imagePath.fatima,
    iconName: "videocam-sharp",
    iconStyle: styles.iconStyle,
  },
  {
    name: "Mustafa Kamal",
    time: "5/1/2026",
    image: imagePath.mustafa,
    iconName: "call-sharp",
    iconStyle: styles.iconStyle,
  },
  {
    name: "Mushraf",
    time: "6/1/2026",
    image: imagePath.mushraf,
    iconName: "call-sharp",
    iconStyle: styles.iconStyle,
  },
  {
    name: "Zoha Asif",
    time: "2/1/2026",
    image: imagePath.zoha,
    iconName: "call-sharp",
    iconStyle: styles.iconStyle,
  },
  {
    name: "Yumna",
    time: "2/1/2026",
    image: imagePath.yumna,
    iconName: "videocam-sharp",
    iconStyle: styles.iconStyle,
  },
];
