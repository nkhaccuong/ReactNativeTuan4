import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/ellipse.png")}
        style={{ width: 140, height: 140 }}
      />

      <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}>
        GROW <br /> YOUR BUSINESS
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 15, textAlign: "center" }}>
        We will help you to grow your business using <br /> online server
      </Text>

      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>HOW WE WORK?</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundImage: "linear-gradient(to bottom , White, #00CCF9)",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },

  button: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonBorder: {
    backgroundColor: "#E3C000",
    borderRadius: 10,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});