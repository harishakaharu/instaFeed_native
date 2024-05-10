import { Image, View } from "react-native";
import profImgStyle from "../styles/ProfImg.style";
import PropTypes from "prop-types";

export default function ProfileImg({ profImg, imgDimensions }) {
  return (
    <View style={[profImgStyle.imgContainer, { borderRadius: imgDimensions }]}>
      <Image
        source={profImg}
        style={{ height: imgDimensions, width: imgDimensions }}
      />
    </View>
  );
}

ProfileImg.propTypes = {
  profImg: PropTypes.any.isRequired,
  imgDimensions: PropTypes.number.isRequired,
};
