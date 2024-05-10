import React from "react";
import { View, Text, Image } from "react-native";
import singlePStyle from "../styles/SingleP.style";
import ProfileImg from "./ProfileImg";

import profImg from "../assets/default_profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function SinglePost({ post }) {
  return (
    <View style={singlePStyle.main}>
      <View style={singlePStyle.header}>
        <ProfileImg imgDimensions={40} profImg={profImg} />
        <View style={singlePStyle.titleContainer}>
          <Text style={singlePStyle.titleTxt}>
            {post.firstName + " "}
            {post.lastName}
          </Text>
          <Text>{post.location}</Text>
        </View>
      </View>
      <View style={singlePStyle.postImgContainer}>
        <Image />
      </View>
      <View style={singlePStyle.statsContainer}>
        <View style={singlePStyle.singleStat}>
          <FontAwesomeIcon icon={faHeart} color={"#c4c7e0"}></FontAwesomeIcon>
          <Text style={singlePStyle.txt}>{post.likes}</Text>
        </View>
        <View style={singlePStyle.singleStat}>
          <FontAwesomeIcon icon={faComment} color={"#c4c7e0"}></FontAwesomeIcon>
          <Text style={singlePStyle.txt}>{post.comments}</Text>
        </View>
        <View style={singlePStyle.singleStat}>
          <FontAwesomeIcon
            icon={faBookmark}
            color={"#c4c7e0"}
          ></FontAwesomeIcon>
          <Text style={singlePStyle.txt}>{post.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
}
