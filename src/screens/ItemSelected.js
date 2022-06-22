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

const { width, height } = Dimensions.get("window");
const ItemSelected = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type="material-community" name={"arrow-left"} size={25} />
        </Pressable>
        <Text numberOfLines={1} style={styles.headerText}>
          Sneaker for men with full color and size free to take
        </Text>
      </View>
      <ScrollView>
        <ImageSlider />
        <View style={styles.detailItem}>
          <View style={styles.userImageContainer}>
            <Image
              source={require("../../assets/ava4.png")}
              style={styles.userImage}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.username}>Jessica Jane</Text>
            <Text style={styles.itemName}>
              Sneaker for men with full color and size free to take right now
              just chat me
            </Text>
            <View style={styles.timeAddedContainer}>
              <Icon
                type="material-community"
                name={"clock-time-nine-outline"}
                size={15}
                color={colors.alernative}
              />
              <Text style={styles.timeDetail}>
                ditambahkan 3 hari yang lalu
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itemDescription}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            delectus quia nemo deleniti ab facilis neque quas molestias? Ipsam
            voluptatem quo rerum illo, facere ut eveniet perferendis possimus
            dolore magni.
          </Text>
        </View>
        <View style={styles.mapView}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: colors.secondaryText2,
              paddingTop: 16,
              paddingBottom: 3,
            }}
          >
            Perkiraan Lokasi
          </Text>
          <MapViews
            region={{
              longitude: 105.828171,
              latitude: -6.372625,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          />
        </View>
      </ScrollView>
      <Pressable>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            backgroundColor: colors.secondaryText2,
            width: width * 0.9,
            paddingVertical: 13,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Kirim pesan permintaan
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemSelected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: gap.statusBarHeight,
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
});
