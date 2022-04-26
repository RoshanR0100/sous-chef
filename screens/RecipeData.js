import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { AdMobBanner } from 'expo-ads-admob';
import HTMLView from 'react-native-htmlview';

const color = "#5EC87C";

const recipeDataURL = 'https://api.spoonacular.com/recipes/';

const apiKey = 'apiKey=56a028ffc4c4471db778d28f3efebf4b';

const RecipeData = ({route, navigation}) => {
    const [RecipeName, setRecipeName] = useState('');
    const [Summary, setSummary] = useState('');
    const [ImageUrl, setImageURL] = useState(''); 
    const [Servings, setServings] = useState('');
    const [ExtendedIngredients, setExtendedIngredients ] = useState([]);
    const [Instructions, setInstructions ] = useState('');

    //Get the recipe information of the selected recipe and set it to the state values on Screen Start
    useEffect(() => {
        getRecipeData(route.params.paramKey)
      }, [])

    return(
    <ScrollView>
        <AdMobBanner 
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7021618864134355/4250418770" 
        />
        <View style={styles.optionsCard}>
            <Image
                style={styles.image}
                source={{
                    uri:
                    ImageUrl,
                }}
                />
            <Text style={styles.optionText}>{RecipeName}</Text>
            <Text style={styles.optionTextBlack}>Ingredients:</Text>
            <View>
                {ExtendedIngredients.map((ing) => {
                    return(
                        <View key={ing.id}>
                            <Text style={styles.optionTextBlackSmall}> -{ing.originalName}</Text>
                        </View>
                    );
                })}
            </View>
            <Text style={styles.optionTextBlack}>Recipe:</Text>
            <HTMLView value={Instructions} stylesheet={styles} />
            <Text style={styles.optionTextBlack}>Servings: {Servings}</Text>
        </View>
    </ScrollView>);

    function getRecipeData(x) {
        axios.get(recipeDataURL + x + '/information?includeNutrition=false&' + apiKey)
        .then((response) => {
            setRecipeName(response.data.title);
            setSummary(response.data.summary);
            setImageURL(response.data.image);
            setServings(response.data.servings);
            setInstructions(response.data.instructions);
            console.log(response.data)
            setExtendedIngredients(response.data.extendedIngredients);
        })
    }
}

export default RecipeData

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
        alignItems: 'flex-start',
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: color
      },
      optionText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: color
      },
      optionTextBlack: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
      },
      optionTextBlackSmall: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
      },
      image: {
        paddingHorizontal: 145,
        paddingVertical: 100,
        marginVertical: 10,
      },
});