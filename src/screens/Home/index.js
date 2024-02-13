import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import RecipeCard from "../../components/RecipeCard";
import Card from "../../components/Card";
const Home = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />
      <Title text="Featured Recipes" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ marginHorizontal: -24 }}
        keyExtractor={(item) => String(item)}
        data={[1, 2, 3]}
        renderItem={({ index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak with tomato sauce and bulgur rice."
            time="20 min"
            author={{
              name: "James Milner",
              image:
                "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
            }}
          />
        )}
      ></FlatList>
      <Categories
        categories={[
          "Trending",
          "Seasonal",
          "Chocoholic",
          "Daily",
          "Chinese",
          "Fruit",
          "Vegetables",
        ]}
        selectedCategory="Trending"
        onCategoryPress={() => {}}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ marginHorizontal: -24 }}
        keyExtractor={(item) => String(item)}
        data={[1, 2, 3]}
        renderItem={({ index }) => (
          <Card
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak with tomato sauce and bulgur rice."
            time="20 min"
            author={{
              name: "James Milner",
              image:
                "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
            }}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default React.memo(Home);
