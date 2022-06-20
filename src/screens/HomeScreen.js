import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Icon } from "react-native-elements";
import { shuffleArray } from "../helpers/shuffledArray";
import {
  CardItem,
  HomeScreenCategoryFilter,
  HomeScreenNavigationHeader,
  MapViews,
} from "../components";
import { colors, gap, gratisMakanan, gratisNonmakanan } from "../global";

const HomeScreen = () => {
  const shuffleData = shuffleArray(gratisMakanan, gratisNonmakanan);
  const [dataRendered, setDataRendered] = useState(shuffleData);
  const [activeSection, setActiveSection] = useState([
    "hSActiveNavigationHeader",
    "hSNotActiveNavigationHeader",
  ]);

  const [region, setRegion] = useState({
    latitude: parseFloat(-6.387875),
    longitude: parseFloat(105.854439),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [activeCategorySection, setActiveCategorySection] = useState([
    colors.secondaryText2,
    colors.secondaryText2,
    colors.secondaryText2,
  ]);

  // active section handler
  function gratisScreenHandler() {
    setActiveSection([
      "hSActiveNavigationHeader",
      "hSNotActiveNavigationHeader",
    ]);
    setDataRendered(shuffleData);
  }

  function pinjamScreenHandler() {
    setActiveSection([
      "hSNotActiveNavigationHeader",
      "hSActiveNavigationHeader",
    ]);
    setDataRendered(shuffleData);
  }

  // active category handler
  function makananCategoryHandler() {
    setActiveCategorySection([
      colors.activeCategory,
      colors.secondaryText2,
      colors.secondaryText2,
    ]);
    setDataRendered(gratisMakanan);
  }

  function nonMakananCategoryHandler() {
    setActiveCategorySection([
      colors.secondaryText2,
      colors.activeCategory,
      colors.secondaryText2,
    ]);
    setDataRendered(gratisNonmakanan);
  }

  function filterCategoryHandler() {
    setActiveCategorySection([
      colors.secondaryText2,
      colors.secondaryText2,
      colors.activeCategory,
    ]);
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

      <HomeScreenNavigationHeader
        gratisScreenHandler={gratisScreenHandler}
        pinjamScreenHandler={pinjamScreenHandler}
        style1={activeSection[0]}
        style2={activeSection[1]}
      />
      {/* category filter */}

      <HomeScreenCategoryFilter
        makananCategoryHandler={makananCategoryHandler}
        nonMakananCategoryHandler={nonMakananCategoryHandler}
        filterCategoryHandler={filterCategoryHandler}
        style1={activeCategorySection[0]}
        style2={activeCategorySection[1]}
        style3={activeCategorySection[2]}
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
            ListFooterComponent={<MapViews region={region} />}
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
