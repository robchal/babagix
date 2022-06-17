import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { colors, shadow } from "../global/styles";

const CardItem = () => {
  return (
    <View style={styles.cardItemContainer}>
      <Image
        source={require("../../assets/fetucini.jpg")}
        style={styles.imageCard}
      />
      <View>
        <Text
          style={{ fontSize: 13, fontWeight: "500", color: colors.primaryText }}
        >
          Fetucini Carbonara
        </Text>
        <View style={styles.userCardDetail}>
          <Image
            source={require("../../assets/ava.png")}
            style={styles.avaImageCard}
          />
          <Text style={{ fontSize: 11, color: colors.secondaryText }}>
            Jhon Doe
          </Text>
        </View>
        <View style={styles.cardDetailItemContainer}>
          <View style={styles.cardDetailItem}>
            <Icon
              type="material-community"
              name="map-marker-outline"
              size={11}
              color={colors.secondaryText2}
            />
            <Text
              style={{
                fontSize: 9,
                color: colors.secondaryText2,
                marginLeft: 2,
              }}
            >
              120km
            </Text>
          </View>
          <View style={styles.cardDetailItem}>
            <Icon
              type="material-community"
              name="cards-heart-outline"
              size={11}
              color={colors.secondaryText2}
            />
            <Text
              style={{
                fontSize: 9,
                color: colors.secondaryText2,
                marginLeft: 2,
              }}
            >
              15
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cardItemContainer: {
    ...shadow,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  imageCard: {
    width: 110,
    height: 100,
    resizeMode: "cover",
    marginRight: 15,
  },
  userCardDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  avaImageCard: {
    borderRadius: 50,
    width: 20,
    height: 20,
    resizeMode: "cover",
    marginRight: 8,
  },
  cardDetailItemContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  cardDetailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
