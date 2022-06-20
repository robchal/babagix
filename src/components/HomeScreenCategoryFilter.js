import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

const HomeScreenCategoryFilter = (props) => {
  const {
    makananCategoryHandler,
    nonMakananCategoryHandler,
    filterCategoryHandler,
    style1,
    style2,
    style3,
  } = props;
  return (
    <View style={styles.hSCategoryContainer}>
      <Pressable
        onPress={makananCategoryHandler}
        style={styles.hSCategoryfilter}
      >
        <Icon type="material-community" name="food" size={20} color={style1} />
        <Text style={{ ...styles.hScategoryText, color: style1 }}>Makanan</Text>
      </Pressable>
      <Pressable
        onPress={nonMakananCategoryHandler}
        style={styles.hSCategoryfilter}
      >
        <Icon
          type="material-community"
          name="dresser-outline"
          size={20}
          color={style2}
        />
        <Text style={{ ...styles.hScategoryText, color: style2 }}>
          Non Makanan
        </Text>
      </Pressable>
      <Pressable
        onPress={filterCategoryHandler}
        style={styles.hSCategoryfilter}
      >
        <Icon
          type="material-community"
          name="tune-variant"
          size={20}
          color={style3}
        />
      </Pressable>
    </View>
  );
};

export default HomeScreenCategoryFilter;

const styles = StyleSheet.create({
  hSCategoryContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 13,
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
  },
  hSCategoryfilter: {
    flexDirection: "row",
    alignItems: "center",
  },
  hScategoryText: {
    fontSize: 13,
    marginLeft: 7,
  },
});
