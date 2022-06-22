import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { colors } from "../global";
import { useState } from "react";
import { Icon } from "react-native-elements";

const images = [
  require("../../assets/nonmakanan/shoe1.webp"),
  require("../../assets/nonmakanan/shoe3.webp"),
  require("../../assets/nonmakanan/shoe3.jpg"),
];

const { width, height } = Dimensions.get("window");
const ImageSlider = () => {
  const [activeDot, setActiveDot] = useState(0);

  function imageSlided({ nativeEvent }) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== activeDot) {
      setActiveDot(slide);
    }
  }
  return (
    <View>
      <View>
        <ScrollView
          onScroll={imageSlided}
          pagingEnabled
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => {
            return (
              <Image
                key={index.toString()}
                source={image}
                style={styles.imageSlider}
              />
            );
          })}
        </ScrollView>
        <View style={styles.dotIndicatorContainer}>
          {images.map((image, index) => {
            return (
              <Text
                key={index.toString()}
                style={
                  index == activeDot
                    ? styles.dotActiveIndicator
                    : styles.dotIndicator
                }
              >
                ⬤
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <Icon
            type="material-community"
            name={"cards-heart-outline"}
            size={20}
          />
          <Text style={{ marginLeft: 2, fontSize: 14 }}>120 likes</Text>
        </View>
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  imageSlider: { width, height: 300, resizeMode: "cover" },
  dotIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginVertical: 10,
  },
  dotActiveIndicator: {
    color: "#0D180B",
    marginRight: 5,
  },
  dotIndicator: {
    color: colors.secondaryText,
    marginRight: 5,
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
});
