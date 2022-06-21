import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import * as React from "react";
import * as Location from "expo-location";
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
  const [dataRendered, setDataRendered] = React.useState(shuffleData);
  const [activeSection, setActiveSection] = React.useState([
    "hSActiveNavigationHeader",
    "hSNotActiveNavigationHeader",
  ]);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [position, setPosition] = React.useState({});

  const [activeCategorySection, setActiveCategorySection] = React.useState([
    colors.secondaryText2,
    colors.secondaryText2,
    colors.secondaryText2,
  ]);

  const _map = React.useRef();
  //user location useeffect
  // React.useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return getLocation;
  //     }
  //     foregroundSubscrition = Location.watchPositionAsync(
  //       {
  //         // Tracking options
  //         accuracy: Location.Accuracy.High,
  //         distanceInterval: 10,
  //       },
  //       (location) => {
  //         // console.log(location);
  //         let cor = {
  //           latitude: location.coords.latitude,
  //           longitude: location.coords.longitude,
  //         };
  //         setPosition({
  //           ...cor,
  //           latitudeDelta: 0.0922,
  //           longitudeDelta: 0.0421,
  //         });
  //       }
  //     );
  //   })();
  // }, []);

  // active section handler

  //another example to use permission
  const checkPermission = async () => {
    const permissionStatus = await Location.requestForegroundPermissionsAsync();
    if (permissionStatus.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setPosition({
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        latitude,
        longitude,
      });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    checkPermission();
    getLocation();
    console.log(position);
  }, []);
  //  screen handler
  function gratisScreenHandler() {
    setActiveSection([
      "hSActiveNavigationHeader",
      "hSNotActiveNavigationHeader",
    ]);
    setActiveCategorySection([
      colors.secondaryText2,
      colors.secondaryText2,
      colors.secondaryText2,
    ]);
    setDataRendered(shuffleData);
  }

  function pinjamScreenHandler() {
    setActiveSection([
      "hSNotActiveNavigationHeader",
      "hSActiveNavigationHeader",
    ]);
    setActiveCategorySection([
      colors.secondaryText2,
      colors.secondaryText2,
      colors.secondaryText2,
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

  const goToMyLocation = async () => {
    _map.current.animateToRegion(position, 2000);
  };
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
      <Button title="show map" onPress={goToMyLocation} />
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
            ListFooterComponent={<MapViews region={position} mapRef={_map} />}
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
