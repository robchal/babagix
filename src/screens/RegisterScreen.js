import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { colors, gap } from "../global";
import Input from "../components/Input";
import { Icon } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg/registerBg.png")}
        style={styles.imageBg}
        resizeMode={"cover"}
      >
        <Pressable
          style={{
            paddingTop: gap.statusBarHeight + 10,
            alignSelf: "flex-start",
            paddingHorizontal: 15,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type="material-community"
            name="chevron-left"
            size={25}
            color={"#fff"}
          />
        </Pressable>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Belum punya akun ?</Text>
          <Text style={styles.loginTextSecondary}>
            Lengkapi data yang dibutuhkan untuk bisa menggunakan
            <Text style={{ color: "#fff", fontWeight: "500" }}> babagix</Text>
          </Text>
          <Text style={styles.loginTextSecondary}>
            Let's help each other!!!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder={"Username"}
            enteredText={(e) => setUsername(e)}
            icon={"account-outline"}
          />
          <Input
            placeholder={"E-mail"}
            enteredText={(e) => setEmail(e)}
            icon={"email-outline"}
          />
          <Input
            placeholder={"No. telepon"}
            enteredText={(e) => setPhoneNumber(e)}
            icon={"phone-outline"}
          />
          <Input
            placeholder={"Kata sandi"}
            enteredText={(e) => setPassword(e)}
            icon={"lock-outline"}
          />
          <Input
            placeholder={"Konfirmasi kata sandi"}
            enteredText={(e) => setConfirmPassword(e)}
            icon={"lock-outline"}
          />
          <Pressable style={styles.buttonSubmit}>
            <Text style={{ color: "#fff", fontWeight: "500" }}>Daftar</Text>
          </Pressable>
          <View style={{ marginVertical: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.loginLink}>Sudah punya akun ? klik </Text>
              <Pressable onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={styles.loginLinkClick}>masuk</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageBg: {
    flex: 1,
  },
  loginContainer: {
    justifyContent: "center",
    flex: 0.8,
    paddingHorizontal: 15,
  },
  loginText: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 18,
    paddingBottom: 15,
  },
  loginTextSecondary: {
    fontWeight: "400",
    color: "#C7D6CA",
    fontSize: 14,
    paddingVertical: 3,
    maxWidth: "70%",
  },
  inputContainer: {
    paddingTop: 25,
    flex: 1.2,
    alignItems: "center",
  },

  buttonSubmit: {
    width: "75%",
    alignItems: "center",
    backgroundColor: colors.primaryLogo,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
  loginLink: {
    fontSize: 11,
    color: colors.alernative,
  },
  loginLinkClick: {
    fontSize: 11,
    color: colors.primaryLogo,
    fontWeight: "500",
  },
});
