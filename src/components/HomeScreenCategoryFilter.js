import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { colors } from "../global";

const HomeScreenCategoryFilter = (props) => {
  const [activeCategory, setActiveCategory] = useState({
    style1: colors.secondaryText2,
    style2: colors.secondaryText2,
    style3: colors.secondaryText2,
  });
  function makananCategoryHandler() {
    setActiveCategory({
      style1: colors.activeCategory,
      style2: colors.secondaryText2,
      style3: colors.secondaryText2,
    });
    props.dataShown(props.dataSend[0]);
  }

  function nonMakananCategoryHandler() {
    setActiveCategory({
      style1: colors.secondaryText2,
      style2: colors.activeCategory,
      style3: colors.secondaryText2,
    });
    props.dataShown(props.dataSend[1]);
  }
  function filterCategoryHandler() {
    setActiveCategory({
      style1: colors.secondaryText2,
      style2: colors.secondaryText2,
      style3: colors.activeCategory,
    });
  }
  return (
    <View style={styles.categoryContainer}>
      <Pressable onPress={makananCategoryHandler} style={styles.categoryfilter}>
        <Icon
          type="material-community"
          name="food"
          size={20}
          color={activeCategory.style1}
        />
        <Text style={{ ...styles.categoryText, color: activeCategory.style1 }}>
          Makanan
        </Text>
      </Pressable>
      <Pressable
        onPress={nonMakananCategoryHandler}
        style={styles.categoryfilter}
      >
        <Icon
          type="material-community"
          name="dresser-outline"
          size={20}
          color={activeCategory.style2}
        />
        <Text style={{ ...styles.categoryText, color: activeCategory.style2 }}>
          Non Makanan
        </Text>
      </Pressable>
      <Pressable onPress={filterCategoryHandler} style={styles.categoryfilter}>
        <Icon
          type="material-community"
          name="tune-variant"
          size={20}
          color={activeCategory.style3}
        />
      </Pressable>
    </View>
  );
};

export default HomeScreenCategoryFilter;

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 13,
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
  },
  categoryfilter: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 13,
    marginLeft: 7,
    color: colors.secondaryText2,
  },
  notActiveCategoryText: {
    fontSize: 13,
    marginLeft: 7,
    color: colors.activeCategory,
  },
});
