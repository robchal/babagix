import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions, Button, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { colors, freeAroundYou } from "../global";
import * as Location from "expo-location";
import { color } from "react-native-elements/dist/helpers";

const { width, height } = Dimensions.get("window");
const MapScreen = () => {
  const [position, setPosition] = React.useState({
    latitudeDelta: 20,
    longitudeDelta: 20,
    latitude: parseFloat(-0.789275),
    longitude: parseFloat(113.921326),
  });
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
  //           latitudeDelta: 0.00822,
  //           longitudeDelta: 0.0421,
  //         });
  //       }
  //     );
  //   })();
  // }, []);
  //another example to use permission

  const checkPermission = async () => {
    const permissionStatus = await Location.requestForegroundPermissionsAsync();
    if (permissionStatus.status === "granted") {
      // const permission = await askPermission();
      // return permission;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setPosition({
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
        latitude,
        longitude,
      });
    }
    return;
  };

  // const askPermission = async () => {
  //   const permission = await Location.requestForegroundPermissionsAsync();
  //   return permission.status === "granted";
  // };

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
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
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
    goToMyLocation();
  }, []);

  //animate to user location
  const goToMyLocation = async () => {
    _map.current.animateToRegion(position, 1000);
  };

  return (
    <View style={styles.container}>
      {position && (
        <View style={{ position: "relative", flex: 1 }}>
          <Pressable
            style={{
              position: "absolute",
              top: 100,
              right: 8,
              backgroundColor: "#fff",
              borderRadius: 100,
              padding: 10,
            }}
            onPress={goToMyLocation}
          >
            <Icon
              type="material-community"
              name="home-outline"
              color={colors.primaryLogo}
              size={30}
            />
          </Pressable>
          <MapView
            ref={_map}
            showsUserLocation={true}
            followsUserLocation={true}
            style={styles.map}
            initialRegion={position}
          >
            {freeAroundYou &&
              freeAroundYou.map((item, index) => {
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
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  map: {
    width,
    height: height,
    zIndex: -100,
  },
});
