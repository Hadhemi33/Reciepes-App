import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Splash from "./src/screens/Splash";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import { Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { getRecipesList } from "./src/http";

const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.back}>
      <Image source={require("./assets/back.png")} />
    </Pressable>
  );
};
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};
export default function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    handleRecipesFetch();
  }, []);
  const handleRecipesFetch = async () => {
    try {
      const recipes = await getRecipesList();
      setRecipes(recipes?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerLeft: null, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerLeft: (props) => <BackButton {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipesContext.Provider>
  );
}
const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
