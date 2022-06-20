import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

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
      />
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
    height: height / 2,
  },
});
