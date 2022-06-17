import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useState } from "react";
import { colors, gap } from "../global/styles";
import { Icon } from "react-native-elements";
import CardItem from "../components/CardItem";

const HomeScreen = () => {
  const [gratisScreen, setGratisScreen] = useState(true);
  const [pinjamScreen, setPinjamScreen] = useState(false);
  const gratisScreenStyle = gratisScreen
    ? styles.hSActiveNavigationHeader
    : styles.hsNotActiveNavigationHeader;
  const pinjamScreenStyle = pinjamScreen
    ? styles.hSActiveNavigationHeader
    : styles.hsNotActiveNavigationHeader;

  function gratisScreenHandler() {
    setGratisScreen(true);
    setPinjamScreen(false);
  }

  function pinjamScreenHandler() {
    setPinjamScreen(true);
    setGratisScreen(false);
  }
  return (
    <View style={styles.homeScreenContainer}>
      {/* screen header */}
      <View style={styles.hSHeaderContainer}>
        <View style={styles.hSLogo}>
          <Text style={styles.hSLogoText}>BABAGIX</Text>
        </View>
        <View style={styles.hSHeaderIconCont}>
          <Pressable style={{ marginRight: 10 }}>
            <Icon type="material-community" name="magnify" size={25} />
          </Pressable>
          <Pressable>
            <Icon type="material-community" name="menu" size={25} />
          </Pressable>
        </View>
      </View>

      {/* navigation header */}
      <View style={styles.hSNavigationHeader}>
        <Pressable onPress={gratisScreenHandler} style={{ marginRight: 30 }}>
          <Text style={gratisScreenStyle}>Gratis</Text>
        </Pressable>
        <Pressable onPress={pinjamScreenHandler}>
          <Text style={pinjamScreenStyle}>Pinjam</Text>
        </Pressable>
      </View>

      {/* category filter */}
      <View style={styles.hSCategoryContainer}>
        <Pressable style={styles.hSCategoryfilter}>
          <Icon
            type="material-community"
            name="menu"
            size={20}
            color={colors.secondaryText2}
          />
          <Text style={styles.hScategoryText}>Makanan</Text>
        </Pressable>
        <Pressable style={styles.hSCategoryfilter}>
          <Icon
            type="material-community"
            name="dresser-outline"
            size={20}
            color={colors.secondaryText2}
          />
          <Text style={styles.hScategoryText}>Non Makanan</Text>
        </Pressable>
        <Pressable style={styles.hSCategoryfilter}>
          <Icon
            type="material-community"
            name="tune-variant"
            size={20}
            color={colors.secondaryText2}
          />
        </Pressable>
      </View>

      {/* card item list */}
      <View style={styles.hSCardContainer}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={(items, index) => {
            return <CardItem />;
          }}
          keyExtractor={(item, index) => {
            return index;
          }}
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 10,
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: gap.statusBarHeight,
    paddingHorizontal: 20,
  },
  hSHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hSLogo: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: colors.primaryLogo,
    borderRadius: 5,
  },
  hSLogoText: {
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
  hSHeaderIconCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  hSNavigationHeader: {
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 10,
  },
  hsNotActiveNavigationHeader: {
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
    color: colors.secondaryText2,
  },
  hSCardContainer: {
    paddingTop: 10,
    flex: 1,
  },
});
