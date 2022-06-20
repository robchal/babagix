import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { colors, shadow } from "../global/styles";

const CardItem = (props) => {
  return (
    <View style={styles.cardItemContainer}>
      <Image source={props.image} style={styles.imageCard} />
      <View>
        <Text
          style={{ fontSize: 14, fontWeight: "500", color: colors.primaryText }}
        >
          {props.itemName}
        </Text>
        <View style={styles.userCardDetail}>
          <Image source={props.userAva} style={styles.avaImageCard} />
          <Text style={{ fontSize: 12, color: colors.secondaryText }}>
            {props.username}
          </Text>
        </View>
        <View style={styles.cardDetailItemContainer}>
          <View style={styles.cardDetailItem}>
            <Icon
              type="material-community"
              name="map-marker-outline"
              size={15}
              color={colors.secondaryText2}
            />
            <Text
              style={{
                fontSize: 11,
                color: colors.secondaryText2,
                marginLeft: 2,
              }}
            >
              {props.location}
            </Text>
          </View>
          <View style={styles.cardDetailItem}>
            <Icon
              type="material-community"
              name="cards-heart-outline"
              size={15}
              color={colors.secondaryText2}
            />
            <Text
              style={{
                fontSize: 11,
                color: colors.secondaryText2,
                marginLeft: 2,
              }}
            >
              {props.loved}
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
