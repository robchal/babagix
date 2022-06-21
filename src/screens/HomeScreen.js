import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import * as React from "react";
import { Icon } from "react-native-elements";
import { shuffleArray } from "../helpers/shuffledArray";
import {
  CardItem,
  HomeScreenCategoryFilter,
  HomeScreenNavigationHeader,
} from "../components";
import { colors, gap, gratisMakanan, gratisNonmakanan } from "../global";

const HomeScreen = () => {
  const shuffleData = shuffleArray(gratisMakanan, gratisNonmakanan);
  const [dataRendered, setDataRendered] = React.useState(shuffleData);
  const [foodCategoryIsActive, setFoodCategoryIsActive] = React.useState(false);
  const [nonFoodCategoryIsActive, setNonFoodCategoryIsActive] =
    React.useState(false);

  const [activeCategorySection, setActiveCategorySection] = React.useState([
    colors.secondaryText2,
    colors.secondaryText2,
    colors.secondaryText2,
  ]);

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

      <HomeScreenNavigationHeader
        dataSend={shuffleData}
        dataShown={(data) => setDataRendered(data)}
      />
      {/* category filter */}

      <HomeScreenCategoryFilter
        dataSend={[gratisMakanan, gratisNonmakanan]}
        dataShown={(data) => setDataRendered(data)}
      />
      {/* card item list */}

      <View style={styles.hSCardContainer}>
        {dataRendered && (
          <FlatList
            data={dataRendered}
            renderItem={(items, index) => {
              return (
                <CardItem
                  image={items.item.image}
                  itemName={items.item.itemName}
                  username={items.item.username}
                  userAva={items.item.userAva}
                  location={items.item.location}
                  loved={items.item.loved}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            showsVerticalScrollIndicator={false}
            style={{
              marginBottom: 30,
              paddingBottom: 50,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: gap.statusBarHeight + 10,
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

  hSCardContainer: {
    paddingTop: 10,
    flex: 5,
  },
});
