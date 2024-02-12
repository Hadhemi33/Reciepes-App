import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import Rating from "../Rating";

const RecipeCard = ({ title, image, author, rating, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Rating rating={4.8} />
        </View>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=556,505",
          }}
        />
      </View>
      <View
        style={styles.footer}
      >
        <View style={styles.row}>
          <Image style={styles.authorImage} source={{ uri: author.image }} />
          <Text style={styles.footerText}>By {author?.name}</Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.timerIcon}
            source={require("../../../assets/timer.png")}
          />
          <Text style={styles.footerText}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;
