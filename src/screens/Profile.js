import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors, gap, itemDatas, shadow } from "../global";
import { Image } from "react-native";
import { Icon } from "react-native-elements";

const numColumns = 3;
const { width, height } = Dimensions.get("window");
const Profile = ({ navigation }) => {
  console.log();
  const [activeProfileScreen, setActiveProfileScreen] = useState([true, false]);
  const [dataRendered, setDataRendered] = useState(itemDatas);

  function showUserPosts() {
    setActiveProfileScreen([true, false]);
  }

  function showUserSettings() {
    setActiveProfileScreen([false, true]);
  }
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
            <Text style={styles.username}>Jhon Doe</Text>
          </View>
          <View style={styles.profileActionContainer}>
            <Pressable
              style={styles.profileAction}
              onPress={() => showUserPosts()}
            >
              <Text
                style={
                  activeProfileScreen[0]
                    ? styles.profileActionText
                    : styles.profileActionText2
                }
              >
                Shared
              </Text>
              <Icon
                type="material-community"
                name="archive-outline"
                size={25}
                color={
                  activeProfileScreen[0] ? colors.primaryText : colors.line
                }
              />
            </Pressable>
            <Pressable
              style={styles.profileAction}
              onPress={() => showUserSettings()}
            >
              <Text
                style={
                  activeProfileScreen[1]
                    ? styles.profileActionText
                    : styles.profileActionText2
                }
              >
                Edit Profile
              </Text>
              <Icon
                type="material-community"
                name="cog-outline"
                size={25}
                color={
                  activeProfileScreen[1] ? colors.primaryText : colors.line
                }
              />
            </Pressable>
          </View>
        </View>
      </View>
      {/* profile content */}
      <View style={styles.contentContainer}>
        {dataRendered && activeProfileScreen[0] && (
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
                return (
                  <Pressable
                    style={{ ...useStyle, ...shadow }}
                    onPress={() =>
                      navigation.navigate("ItemSelectedScreen", { data: item })
                    }
                  >
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
        {activeProfileScreen[1] && (
          <View style={styles.settingScontainer}>
            <View>
              <TextInput value="Jhon Doe" style={styles.editInput} />
            </View>
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
  username: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.secondaryText2,
    marginTop: 15,
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
    color: colors.primaryText,
    fontWeight: "500",
  },
  profileActionText2: {
    marginRight: 10,
    color: colors.line,
    fontWeight: "500",
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
  settingScontainer: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  editInput: {
    paddingVertical: 3,
    borderBottomWidth: 0.55,
    borderBottomColor: colors.line,
    color: colors.secondaryText,
  },
});
