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
const Home = ({ onPress, children }) => {
  return (
    <SafeAreaView style={styles.background}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
