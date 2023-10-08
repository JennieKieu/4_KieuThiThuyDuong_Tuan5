import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Checkbox } from "react-native-paper";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(59, 59, 152, 1)", "rgba(196, 196, 196, 0)"]}
    >
      <View style={styles.viewBackgroup}>
        <View>
          <Text style={styles.textPG}>
            <h1>
              PASSWORD <br></br> GENERATOR
            </h1>
          </Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.textIP}></TextInput>
        </View>
        <View style={styles.viewCen}>
          <View style={styles.viewPL}>
            <Text style={styles.textPL}>
              <h3>Password length</h3>
            </Text>
            <TextInput style={styles.inputPL}></TextInput>
          </View>
          <View style={styles.viewInclude}>
            <Text style={styles.textPL}>
              <h3>Include lower case letters</h3>
            </Text>
            <Checkbox.Item status="checked" style={styles.checkBox} />
          </View>
          <View style={styles.viewInclude}>
            <Text style={styles.textPL}>
              <h3>Include upcase letters</h3>
            </Text>
            <Checkbox.Item status="unchecked" style={styles.checkBox2} />
          </View>
          <View style={styles.viewInclude}>
            <Text style={styles.textPL}>
              <h3>Include number</h3>
            </Text>
            <Checkbox.Item status="checked" style={styles.checkBox3} />
          </View>
          <View style={styles.viewInclude}>
            <Text style={styles.textPL}>
              <h3>Include special symbol</h3>
            </Text>
            <Checkbox.Item status="unchecked" style={styles.checkBox4} />
          </View>
        </View>
        <View style={styles.touchLogin}>
          <TouchableOpacity style={styles.textTouch}>
            <h3>GENERATE PASSWORD</h3>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewBackgroup: {
    backgroundColor: "rgba(35, 35, 91, 1)",
    height: 605,
    width: 322,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textPG: {
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
  viewInput: {
    height: 55,
    width: 297,
    backgroundColor: "#151537",
    marginTop: 20,
    
  },
  textIP: {
    height: 55,
    width: 297,
  },
  textPL: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    justifyContent: "flex-start",
  },
  viewPL: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  inputPL: {
    height: 33,
    width: 118,
    backgroundColor: "white",
    justifyContent: "flex-end",
    marginLeft: 30,
  },
  viewInclude: {
    flexDirection: "row",
    alignItems: "center",

    marginLeft: 15,
  },
  checkBox2: {
    marginLeft: 31,
  },
  checkBox3: {
    marginLeft: 81,
  },
  checkBox4: {
    marginLeft: 23,
  },
  touchLogin: {
    height: 55,
    width: 269,
    backgroundColor: "#3B3B98",
    color: "white",
    fontFamily: "Roboto",
  },
  textTouch: {
    color: "#fff",
    textAlign: "center"
  },
});
