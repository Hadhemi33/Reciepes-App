import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { HealthyRecipesContext, RecipesContext } from "../../../App";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import Input from "../../components/Input";
import RecipeCard from "../../components/RecipeCard";
import Title from "../../components/Title";
import styles from "./styles";
const Home = ({ navigation }) => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState();
  const { recipes } = useContext(RecipesContext);
  const { healthyRecipes } = useContext(HealthyRecipesContext);
  useEffect(() => {
    const tagsList = [];
    recipes?.forEach((recipes) => {
      recipes?.tags?.forEach((tag) => {
        if (!tagsList?.includes(tag?.name)) {
          tagsList?.push(tag?.name);
        }
      });
    });
    setTags(tagsList);
  }, [recipes]);
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />
      <Title text="Featured Recipes" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={healthyRecipes}
        style={{ marginHorizontal: -24 }}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item, index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            title={item?.name}
            onPress={() => navigation.navigate("RecipeDetails", { item })}
            time={item?.cook_time_minutes}
            image={item?.thumbnail_url}
            rating={item?.user_ratings?.score}
            author={
              item?.credits?.length
                ? {
                    name: item?.credits[0]?.name,
                    image: item?.credits[0]?.image_url,
                  }
                : null
            }
          />
        )}
      ></FlatList>
      <Categories
        categories={tags}
        selectedCategory={selectedTag}
        onCategoryPress={setSelectedTag}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ marginHorizontal: -24 }}
        keyExtractor={(item) => String(item?.id)}
        data={recipes}
        renderItem={({ item, index }) => (
          <Card
            onPress={() => navigation.navigate("RecipeDetails", { item })}
            style={index === 0 ? { marginLeft: 24 } : {}}
            title={item?.name}
            servings={item?.num_servings}
            image={item?.thumbnail_url}
            rating={item?.user_ratings?.score}
            author={
              item?.credits?.length
                ? {
                    name: item?.credits[0]?.name,
                    image: item?.credits[0]?.image_url,
                  }
                : null
            }
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default React.memo(Home);
