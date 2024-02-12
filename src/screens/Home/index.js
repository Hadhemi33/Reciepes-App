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
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import RecipeCard from "../../components/RecipeCard";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />
      <Title text="Featured Recipes" />
      <RecipeCard
        title="Steak with tomato sauce and bulgur rice."
        time="20 min"
        author={{
          name: "James Milner",
          image: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
        }}
      />
      <Categories
        categories={["All", "Trending"]}
        selectedCategory="All"
        onCategoryPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
