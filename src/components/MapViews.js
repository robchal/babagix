import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../global";

const { width, height } = Dimensions.get("window");
const MapViews = (props) => {
  return (
    <View style={styles.container}>
      <MapView
        ref={props.mapRef}
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
        initialRegion={props.region}
      >
        {props.aroundYou &&
          props.aroundYou.map((item, index) => {
            return (
              <MapView.Marker coordinate={item} key={index.toString()}>
                <Icon
                  type="material-community"
                  name="food-outline"
                  size={25}
                  color={colors.primaryText}
                />
              </MapView.Marker>
            );
          })}
      </MapView>
    </View>
  );
};

export default MapViews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  map: {
    width,
    height: height,
  },
});
