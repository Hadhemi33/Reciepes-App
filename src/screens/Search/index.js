import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../../App";
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

import Input from "../../components/Input";
import Card from "../../components/Card";
const Search = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    if (keyword?.length > 2) {
      const filteresItem = recipes.filter((rec) =>
        rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase())
      );
      setFilteredRecipes(filteresItem);
    } else {
      setFilteredRecipes([]);
    }
  }, [keyword]);
  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus onChangeText={setKeyword} value={keyword} />
      <FlatList
        data={filteredRecipes}
        numColumns={2}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item, index }) => (
          <Card
            style={{ marginLeft: 8 }}
            title={item?.name}
            onPress={() => navigation.navigate("RecipeDetails", { item })}
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
      />
    </SafeAreaView>
  );
};

export default React.memo(Search);
