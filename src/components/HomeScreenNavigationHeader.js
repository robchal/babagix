import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../global/styles";

const HomeScreenNavigationHeader = (props) => {
  const [screenNavigationStyle, setScreenNavigationStyle] = useState([
    "activeNavigationHeader",
    "notActiveNavigationHeader",
  ]);

  function gratisScreenHandler() {
    setScreenNavigationStyle([
      "activeNavigationHeader",
      "notActiveNavigationHeader",
    ]);
    props.dataShown([...props.dataSend]);
  }

  function pinjamScreenHandler() {
    setScreenNavigationStyle([
      "notActiveNavigationHeader",
      "activeNavigationHeader",
    ]);
    props.dataShown([...props.dataSend]);
  }

  return (
    <View style={styles.navigationHeader}>
      <Pressable onPress={gratisScreenHandler} style={{ marginRight: 30 }}>
        <Text style={styles[screenNavigationStyle[0]]}>Gratis</Text>
      </Pressable>
      <Pressable onPress={pinjamScreenHandler}>
        <Text style={styles[screenNavigationStyle[1]]}>Pinjam</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreenNavigationHeader;

const styles = StyleSheet.create({
  navigationHeader: {
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 10,
  },
  notActiveNavigationHeader: {
    color: colors.secondaryText,
    fontWeight: "500",
    fontSize: 17,
    paddingBottom: 10,
    paddingRight: 5,
  },
  activeNavigationHeader: {
    color: colors.primaryText,
    fontWeight: "500",
    fontSize: 17,
    paddingBottom: 10,
    borderBottomColor: colors.primaryText,
    borderBottomWidth: 2,
    paddingRight: 5,
  },
});
