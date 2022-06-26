import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import * as React from "react";
import { Icon } from "react-native-elements";
import { CardItem, Header, HomeScreenNavigationHeader } from "../components";
import { colors, gap, itemDatas } from "../global";
import { shuffleArray } from "../helpers";

const HomeScreen = ({ navigation }) => {
  const shuffleData = shuffleArray(itemDatas);
  const [dataRendered, setDataRendered] = React.useState(shuffleData);

  return (
    <View style={styles.homeScreenContainer}>
      {/* screen header */}
      <Header navigation={(screen) => navigation.navigate(screen)} />
      {/* navigation header */}

      <HomeScreenNavigationHeader
        dataSend={shuffleData}
        dataShown={(data) => setDataRendered(data)}
      />

      {/* card item list */}

      <View style={styles.hSCardContainer}>
        <View style={styles.cardItemHeaderContainer}>
          <Text style={styles.cardItemHeader}>Disekitar kamu</Text>
          <View></View>
        </View>

        {!dataRendered && (
          <View>
            <Text style={styles.emptyListItemMsg}>
              Belum ada barang yang dibagikan disekitar kamu sekarang, kenapa
              tidak jadi yang pertama ?
            </Text>
          </View>
        )}
        {dataRendered && (
          <FlatList
            data={dataRendered}
            renderItem={(items, index) => {
              return (
                <CardItem
                  data={items}
                  navigate={(screen, data) => navigation.navigate(screen, data)}
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
  hSCardContainer: {
    paddingTop: 10,
    flex: 5,
  },
  cardItemHeaderContainer: {
    backgroundColor: colors.activeCategory,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginBottom: 10,
  },
  cardItemHeader: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "500",
  },
  emptyListItemMsg: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    color: "#d3d3d3",
    paddingVertical: 20,
  },
});
