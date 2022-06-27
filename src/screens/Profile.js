import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { colors, gap, itemDatas, shadow } from "../global";
import { Image } from "react-native";
import { Icon } from "react-native-elements";

const numColumns = 3;
const { width, height } = Dimensions.get("window");
const Profile = ({ navigation }) => {
  console.log();
  const [dataRendered, setDataRendered] = useState(itemDatas);
  return (
    <View style={styles.container}>
      {/* navigation back */}
      <View style={styles.navigationBack}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type="material-community" name="arrow-left" size={25} />
        </Pressable>
      </View>
      {/* profile detail and action  */}
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <View style={styles.imageProfileContainer}>
            <View style={styles.imageProfileShadow}>
              <Image
                source={require("../../assets/ava1.png")}
                style={styles.imageProfile}
              />
            </View>
          </View>
          <View style={styles.profileActionContainer}>
            <Pressable style={styles.profileAction}>
              <Text style={styles.profileActionText}>Shared</Text>
              <Icon
                type="material-community"
                name="archive-outline"
                size={25}
              />
            </Pressable>
            <Pressable style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>
              <Icon type="material-community" name="cog-outline" size={25} />
            </Pressable>
          </View>
        </View>
      </View>
      {/* profile content */}
      <View style={styles.contentContainer}>
        {dataRendered && (
          <View style={{ flex: 1, width }}>
            <FlatList
              data={dataRendered}
              numColumns={numColumns}
              renderItem={({ item, index }) => {
                const lastOrSecondLastItem =
                  index == dataRendered.length - 2 ||
                  index == dataRendered.length - 1;
                const gridStyle =
                  dataRendered.length % 3 !== 0 && lastOrSecondLastItem;
                const useStyle = !gridStyle
                  ? styles.normalGridImage
                  : gridStyle && dataRendered.length - index == 2
                  ? styles.secondGridImage
                  : styles.thirdGridImage;
                console.log(useStyle);
                return (
                  <Pressable style={{ ...useStyle, ...shadow }}>
                    <Image
                      source={item.images[0]}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                      }}
                    />
                  </Pressable>
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              style={{ paddingBottom: 300, flex: 1 }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: gap.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
  navigationBack: {
    borderBottomWidth: 0.3,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomColor: colors.line,
  },
  profileActionContainer: {},
  profile: {
    paddingHorizontal: 15,
  },
  imageProfileContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  imageProfile: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 100,
  },
  imageProfileShadow: {
    width: 70,
    height: 70,
    borderRadius: 100,
    ...shadow,
  },
  profileActionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.3,
    paddingBottom: 20,
    borderBottomColor: colors.secondaryText,
  },
  profileAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileActionText: {
    marginRight: 10,
  },
  contentContainer: {
    paddingTop: 5,
    flex: 1,
  },
  normalGridImage: {
    flex: 1,
    height: 130,
    margin: 2,
  },
  secondGridImage: {
    width: width / 3 - 4,
    height: 130,
    margin: 2,
  },
  thirdGridImage: {
    width: width / 3 - 4,
    height: 130,
    margin: 2,
  },
});
