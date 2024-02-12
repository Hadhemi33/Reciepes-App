import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
const Search = ({ onPress, children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
    </SafeAreaView>
  );
};

export default React.memo(Search);
