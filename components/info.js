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
import photo from "../assets/Online_shh.jpeg";

const { width, height } = Dimensions.get("screen");
function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONLINE SHOPPING</Text>
      <Text style={styles.text}>
        Online shopping, or e-commerce, has become a ubiquitous and
        transformative aspect of modern consumer culture, providing unparalleled
        convenience, a vast selection of products, 24/7 accessibility, price
        comparison tools, user reviews, secure transactions, home delivery, and
        easy returns.
      </Text>
      <View style={styles.photoDiv}>
        <Image source={photo} style={styles.image} alt="logo" />
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
          Next
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View style={styles.bottomRow}>
        <View style={styles.botRowFlex}></View>
        <View style={[styles.navDots, styles.botRowFlex]}>
          <View style={[styles.selectedNavDot, { marginRight: 2 }]}></View>
          <View style={[styles.navDot, { marginRight: 2 }]}></View>
          <View style={styles.navDot}></View>
        </View>
        <View style={styles.botRowFlex}>
          <TouchableOpacity>
            <Text style={styles.xxText}>Skip</Text>
          </TouchableOpacity>
        </View>
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
    width: width - 100,
    height: width - 160,
    marginTop: 50,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    height: null,
    resizeMode: "cover",
    width: null,
    borderRadius: 10,
  },
  nextButton: {
    marginTop: 80,
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
    position:"absolute",
    bottom:20 ,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botRowFlex: {
    width:width/2.5
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
export default Info;
