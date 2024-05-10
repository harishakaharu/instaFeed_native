import React from "react";
import { FlatList, View } from "react-native";
import userPostStyle from "../styles/UserPostStyle";
import SinglePost from "./SinglePost";

export default function UserPosts({ userPosts, scrollPostHandler }) {
  return (
    <View style={userPostStyle.main}>
      <FlatList
        onEndReached={() => scrollPostHandler("end")}
        onEndReachedThreshold={0.5}
        data={userPosts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SinglePost key={"userPost" + item.id} post={item} />
        )}
        // keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
