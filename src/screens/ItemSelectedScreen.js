import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import ImageSlider from "../components/ImageSlider";
import { Icon } from "react-native-elements";
import { colors, gap, shadow } from "../global";
import { MapViews } from "../components";
import { relativeTime } from "../helpers";

const { width, height } = Dimensions.get("window");
const ItemSelectedScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type="material-community" name={"arrow-left"} size={25} />
        </Pressable>
        <Text numberOfLines={1} style={styles.headerText}>
          {route.params.data.itemName}
        </Text>
      </View>
      <ScrollView>
        <ImageSlider images={route.params.data.images} />
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <Pressable>
              <Icon
                type="material-community"
                name={"cards-heart-outline"}
                size={22}
                color="#6F7B74"
              />
            </Pressable>
            <Text style={styles.likedText}>120 likes</Text>
          </View>
        </View>
        <View style={styles.detailItem}>
          <View style={styles.userImageContainer}>
            <Image
              source={require("../../assets/ava4.png")}
              style={styles.userImage}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.username}>Jessica Jane</Text>
            <Text style={styles.itemName}>{route.params.data.itemName}</Text>
            <View style={styles.timeAddedContainer}>
              <Icon
                type="material-community"
                name={"clock-time-nine-outline"}
                size={15}
                color={colors.alernative}
              />
              <Text style={styles.timeDetail}>
                ditambahkan {relativeTime(route.params.data.createdAt)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itemDescription}>
          <Text>{route.params.data.description}</Text>
        </View>
        <View style={styles.mapView}>
          <Text style={styles.mapHeaderText}>Perkiraan Lokasi</Text>
          <MapViews
            region={{
              longitude: route.params.data.location.longitude,
              latitude: route.params.data.location.latitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          />
        </View>
      </ScrollView>
      <Pressable onPress={() => navigation.navigate("ChatScreen")}>
        <View style={styles.chatButtonContainer}>
          <Text style={styles.chatButtonText}>Kirim pesan permintaan</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemSelectedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: gap.statusBarHeight + 5,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 10,
    color: colors.alernative,
    fontSize: 17,
  },
  detailItem: {
    paddingHorizontal: 15,
    marginTop: 20,
    flexDirection: "row",
  },
  userImageContainer: {
    ...shadow,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "cover",
  },
  details: {
    flex: 1,
    paddingLeft: 15,
  },
  username: { fontSize: 13, color: colors.secondaryText },
  itemName: {
    fontWeight: "500",
    color: "#333",
    maxWidth: width * 0.7,
    fontSize: 17,
  },
  timeAddedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  timeDetail: { fontSize: 12, marginLeft: 5, color: colors.alernative },
  itemDescription: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 8,
  },
  mapView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  iconsContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    backgroundColor: "#E9E9E9",
    paddingVertical: 8,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 13,
  },
  likedText: {
    marginLeft: 2,
    fontSize: 13,
    color: "#6F7B74",
  },
  mapHeaderText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.secondaryText2,
    paddingTop: 16,
    paddingBottom: 3,
  },
  chatButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.secondaryText2,
    width: width * 0.9,
    paddingVertical: 13,
    borderRadius: 10,
  },
  chatButtonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});
