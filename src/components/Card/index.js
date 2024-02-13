import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import Rating from "../Rating";

const Card = ({ title, style, image, time }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={{
          uri: "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Bulgur-Pilaf-9.jpg",
        }}
      />
      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.label}>Time</Text>
      <Text style={styles.value}>{time}</Text>
    </View>
  );
};

export default Card;
