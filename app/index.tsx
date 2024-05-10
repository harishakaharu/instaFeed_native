import { Text, Pressable, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import indexStyle from '../styles/index.style';
import { useFonts } from "expo-font";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Title from '../components/Title';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { userPosts, userStories } from '../data';
import UserStories from '../components/UsersStories';
import UserPosts from '../components/UserPosts'
import { useEffect, useState } from "react";
export default function Index() {
  const [isFontLoaded] = useFonts({
    "Inter": require("../assets/fonts/Inter-VariableFont_slnt,wght.ttf"),
  });
  const userStoryPageSize = 4;
  const [pageCounter, setPageCounter] = useState(1);
  const [renderedStories, setRenderedStories]: any = useState([]);
  const [pagePostCounter, setPagePostCounter] = useState(1);
  const [renderedPost, setRenderedPost]: any = useState([]);
  const pagination = (data: any[], pageSize: number, currentPage: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= data.length) {
      return [];
    } else {
      return data.slice(startIndex, endIndex)
    }
  }
  const postHandler = (data: string) => {
    if (data === 'end') {
      const nextPageData = pagination(userPosts, userStoryPageSize, pagePostCounter + 1);
      if (nextPageData.length > 0) {
        setPagePostCounter(prev => ++prev)
      }
      setRenderedPost((prev: any) => [...prev, ...nextPageData])
    }
  }
  const scrollFlagHanlder = (data: string) => {
    if (data === 'end') {
      const nextPageData = pagination(userStories, userStoryPageSize, pageCounter + 1);
      if (nextPageData.length > 0) {
        setPageCounter(prev => ++prev)
      }
      setRenderedStories((prev: any) => [...prev, ...nextPageData])
    }
  }
  useEffect(() => {
    const firstList = pagination(userStories, userStoryPageSize, pageCounter)
    const firstPostList = pagination(userPosts, userStoryPageSize, pagePostCounter);
    setRenderedPost(firstPostList)
    setRenderedStories(firstList);
  }, [])
  return (
    isFontLoaded && <SafeAreaProvider>
      <SafeAreaView style={indexStyle.main}>
        <View style={indexStyle.title}>
          <Title title={`Let's Explore`} />
          <Pressable >
            <FontAwesomeIcon icon={faEnvelopeSquare} style={indexStyle.icons} color={'#898DAE'} />
            <View style={indexStyle.messageHeader}><Text style={indexStyle.messageCount}>2</Text></View>
          </Pressable>
        </View>
        {renderedStories && <UserStories users={renderedStories} scrollFlagHanlder={scrollFlagHanlder} />}
        {renderedPost && <UserPosts userPosts={renderedPost} scrollPostHandler={postHandler} />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
