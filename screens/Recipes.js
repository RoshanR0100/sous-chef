import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import {Card}  from 'react-native-elements';
import Line from '../shared/Line';
import BannerAd from '../shared/BannerAd';

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

    return(
      <View>
        {recipeList.length ?  
        <ScrollView>
          <BannerAd />
          {recipeList.map((item) => {
            return(
              <View key={item.id} style={styles.optionsCard}>
                <Text style={styles.headerText}>{item.title}</Text>
                <Line />
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      `${item.image}`,
                  }}
                />
                <Pressable onPress={()=> {navigation.navigate('RecipeData', {paramKey: item.id,})}}>
                  <Text style={styles.optionText}>SHOW ME THE RECIPE!</Text>
                </Pressable>
              </View>
            )
          })}
        </ScrollView>
      :
        <View>
          <AdMobBanner 
                bannerSize="banner"
                adUnitId="ca-app-pub-7021618864134355/4250418770"
                servePersonalizedAds={false}
            />
          <Text style={styles.sorryText}>Sorry, we couldn't find a recipe for you in our database</Text>
        </View>
        }
      </View>
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
    borderRadius: 16,
    justifyContent: 'space-evenly',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: color,
    flex: 1,
    flexDirection: 'row',
  },
  optionText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: color
  },
  image: {
    paddingHorizontal: 145,
    paddingVertical: 100,
    margin: 20,
  },
  sorryText: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 22,
    color: color,
    alignSelf: 'center',
  }
  // main: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});