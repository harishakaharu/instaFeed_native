import { FlatList, View } from "react-native";
import flatListStyle from "../styles/FlatList.style";
import SingleStory from "./SingleStory";

export default function UsersStories({ users, scrollFlagHanlder }) {
  return (
    <View style={flatListStyle.main}>
      <FlatList
        onEndReached={() => scrollFlagHanlder("end")}
        onEndReachedThreshold={0.5}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={users}
        renderItem={({ item }) => (
          <SingleStory key={"userStory" + item.id} story={item} />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
