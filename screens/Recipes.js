import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import {Card}  from 'react-native-elements';

const color = "#5EC87C";

const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true';

const apiKey = 'apiKey=56a028ffc4c4471db778d28f3efebf4b';

const Recipes = ({ route, navigation }) => {

  const [recipeList, setRecipeList] = useState([]);

  //Get the list of recipes with the information inputted in the home screen
  //and set it to the recipeList array on Screen Start
  useEffect(() => {
    getRecipeList(route.params.paramKey);
    console.log(route.params.paramKey);
  }, [])

  return (
    <ScrollView>
      <View>
        {recipeList.map((item) => {
          return(
            <Card key={`${item.id}`} style={styles.optionsCard}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0, marginBottom: 10 }}
                source={{
                  uri:
                    `${item.image}`,
                }}
              />
              <Button color = {color} style={styles.button} onPress={()=> {navigation.navigate('RecipeData', {paramKey: item.id,})}} title='Show me the recipe!' />
            </Card>
          )
        })}
      </View>
    </ScrollView>
  );

  function getRecipeList(x) {
    axios.get(apiUrl + x + apiKey)
      .then((response) => {setRecipeList(response.data.results);})
      .catch((error) => {
        console.log(error);
      });
  }
}
export default Recipes;

const styles = StyleSheet.create({

  optionsCard: {
    alignItems: 'center',  
    borderRadius: 45
  },

  button: {
    margin: 10,
    maxWidth: "60%",
  },
});