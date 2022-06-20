import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../global/styles";

const HomeScreenNavigationHeader = (props) => {
  const { gratisScreenHandler, pinjamScreenHandler, style1, style2 } = props;
  return (
    <View style={styles.hSNavigationHeader}>
      <Pressable onPress={gratisScreenHandler} style={{ marginRight: 30 }}>
        <Text style={styles[style1]}>Gratis</Text>
      </Pressable>
      <Pressable onPress={pinjamScreenHandler}>
        <Text style={styles[style2]}>Pinjam</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreenNavigationHeader;

const styles = StyleSheet.create({
  hSNavigationHeader: {
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 10,
  },
  hSNotActiveNavigationHeader: {
    color: colors.secondaryText,
    fontWeight: "500",
    fontSize: 17,
    paddingBottom: 10,
    paddingRight: 5,
  },
  hSActiveNavigationHeader: {
    color: colors.primaryText,
    fontWeight: "500",
    fontSize: 17,
    paddingBottom: 10,
    borderBottomColor: colors.primaryText,
    borderBottomWidth: 2,
    paddingRight: 5,
  },
});
