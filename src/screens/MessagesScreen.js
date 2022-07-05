import {
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  FlatList,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";
import { gap, colors, chatList } from "../global";
import { ChatList } from "../components";

const { width, height } = Dimensions.get("window");
const MessagesScreen = ({ navigation }) => {
  const [message, setMessage] = useState(chatList);
  return (
    <View style={styles.container}>
      <View style={styles.navigationBack}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type="material-community" name="arrow-left" size={25} />
        </Pressable>
        <Text style={styles.header}>Pesan masuk</Text>
      </View>

      {message && (
        <FlatList
          data={message}
          renderItem={({ item, index }) => {
            return (
              <ChatList
                data={item}
                navigation={(screen, data) => navigation.navigate(screen, data)}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.userId;
          }}
        />
      )}
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: gap.statusBarHeight,
    flex: 1,
    width,
  },
  navigationBack: {
    borderBottomWidth: 0.3,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomColor: colors.line,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flex: 1,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    marginRight: 25,
  },
});
