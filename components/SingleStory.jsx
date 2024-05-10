import { Text, View } from "react-native";
import singleStyle from "../styles/SingleS.style";
import ProFileImg from "./ProfileImg";

export default function SingleStory({ story }) {
  return (
    <View style={singleStyle.main}>
      <ProFileImg profImg={story.profImg} imgDimensions={65} />
      <Text style={singleStyle.txt}>{story.name}</Text>
    </View>
  );
}
