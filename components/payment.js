import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import photo from "../assets/paym2.jpeg";

const { width, height } = Dimensions.get("screen");
function Payment() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>
      <Text style={styles.text}>
        Payment Successful! Your transaction has been approved, and your order
        is confirmed. Here is your order id:1043345346334. Go to My Orders to
        manage, add more information on delivery or track your order. Use the
        "Get Started" button to return to the homepage. Thank you for choosing
        us for your purchase!"
      </Text>
      <View style={styles.photoDiv}>
        <Image source={photo} style={styles.image} alt="logo" />
      </View>
      <TouchableOpacity style={styles.getSButton}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
          Get Started
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View style={styles.bottomRow}>
        <View style={styles.botRowFlex}>
          <TouchableOpacity>
            <Text style={styles.xxText}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.navDots, styles.botRowFlex]}>
          <View style={[styles.navDot, { marginRight: 2 }]}></View>
          <View style={[styles.navDot, { marginRight: 2 }]}></View>
          <View style={styles.selectedNavDot}></View>
        </View>
        <View style={styles.botRowFlex}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 110,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: "grey",
    fontWeight: "500",
  },
  photoDiv: {
    width: width - 90,
    height: width - 140,
    marginTop: 60,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    height: null,
    resizeMode: "cover",
    width: null,
    borderRadius: 10,
  },
  getSButton: {
    marginTop: 70,
    backgroundColor: "#575299",
    width: 200,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomRow: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botRowFlex: {
    width: width / 2.5,
  },
  navDots: {
    flexDirection: "row",
    alignSelf: "center",
  },
  selectedNavDot: {
    width: 20,
    height: 10,
    backgroundColor: "#575299",
    borderRadius: 5,
  },
  navDot: {
    height: 10,
    width: 10,
    backgroundColor: "lightgrey",
    borderRadius: 5,
  },
  xxText: {
    fontSize: 18,
    color: "lightgrey",
    fontWeight: "900",
  },
});
export default Payment;
