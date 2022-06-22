import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../global";
import { filterData } from "../helpers/filterData";

const HomeScreenNavigationHeader = (props) => {
  const initialStateCategory = {
    style1: colors.secondaryText2,
    style2: colors.secondaryText2,
    style3: colors.secondaryText2,
  };
  const [screenNavigationStyle, setScreenNavigationStyle] = useState([
    "activeNavigationHeader",
    "notActiveNavigationHeader",
  ]);
  const [activeCategory, setActiveCategory] = useState(initialStateCategory);

  //handler
  function makananCategoryHandler() {
    setActiveCategory({
      style1: colors.activeCategory,
      style2: colors.secondaryText2,
      style3: colors.secondaryText2,
    });
    props.dataShown(filterData(props.dataSend, 1));
    props.resetActiveCategory(true);
  }

  function nonMakananCategoryHandler() {
    setActiveCategory({
      style1: colors.secondaryText2,
      style2: colors.activeCategory,
      style3: colors.secondaryText2,
    });
    props.dataShown(filterData(props.dataSend, 2));
    props.resetActiveCategory(true);
  }

  function filterCategoryHandler() {
    setActiveCategory({
      style1: colors.secondaryText2,
      style2: colors.secondaryText2,
      style3: colors.activeCategory,
    });
  }

  function gratisScreenHandler() {
    setScreenNavigationStyle([
      "activeNavigationHeader",
      "notActiveNavigationHeader",
    ]);
    props.dataShown([...props.dataSend]);
    props.resetActiveCategory(false);
    setActiveCategory(initialStateCategory);
  }

  function pinjamScreenHandler() {
    setScreenNavigationStyle([
      "notActiveNavigationHeader",
      "activeNavigationHeader",
    ]);
    props.dataShown([...props.dataSend]);
    props.resetActiveCategory(false);
    setActiveCategory(initialStateCategory);
  }

  return (
    <View>
      <View style={styles.navigationHeader}>
        <Pressable onPress={gratisScreenHandler} style={{ marginRight: 30 }}>
          <Text style={styles[screenNavigationStyle[0]]}>Gratis</Text>
        </Pressable>
        <Pressable onPress={pinjamScreenHandler}>
          <Text style={styles[screenNavigationStyle[1]]}>Pinjam</Text>
        </Pressable>
      </View>
      <View style={styles.categoryContainer}>
        <Pressable
          onPress={makananCategoryHandler}
          style={styles.categoryfilter}
        >
          <Icon
            type="material-community"
            name="food"
            size={20}
            color={activeCategory.style1}
          />
          <Text
            style={{ ...styles.categoryText, color: activeCategory.style1 }}
          >
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
          <Text
            style={{ ...styles.categoryText, color: activeCategory.style2 }}
          >
            Non Makanan
          </Text>
        </Pressable>
        <Pressable
          onPress={filterCategoryHandler}
          style={styles.categoryfilter}
        >
          <Icon
            type="material-community"
            name="tune-variant"
            size={20}
            color={activeCategory.style3}
          />
        </Pressable>
      </View>
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
