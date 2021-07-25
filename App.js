import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./meteor_bg1.png")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <Header
            centerComponent={{
              text: "Rotation vs Revolution",
              style: { fontSize: 22, fontWeight: "bold" },
            }}
          ></Header>
          <TextInput
            style={styles.inputBox}
            placeholder={"Enter Hours"}
            onChangeText={(input) => {
              this.setState({
                hours: input,
              });
            }}
            keyboardType={"number-pad"}
          ></TextInput>
          <TouchableOpacity
          style={styles.button}
          onPress={()=>{}}
          ><Text>Search</Text></TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    width: "80%",
    height: 40,
    marginTop: 350,
    borderWidth: 5,
    marginLeft: 50,
    textAlign: "center",
    backgroundColor: "#63C5DA",
  },
  button: {
    marginLeft: 150,
    marginTop: 50,
    borderRadius: 15,
    borderWidth: 3,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderColor: 'white',
    height: 40,
  },
});
