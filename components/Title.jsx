import { Text } from "react-native";
import titleStyle from "../styles/Title.style";
import PropTypes from "prop-types";
export default function Title({ title }) {
  return <Text style={titleStyle.txt}>{title}</Text>;
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
