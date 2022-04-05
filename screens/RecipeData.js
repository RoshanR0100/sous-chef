import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { View, Text, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import HTMLView from 'react-native-htmlview';


const recipeDataURL = 'https://api.spoonacular.com/recipes/';

const apiKey = 'apiKey=56a028ffc4c4471db778d28f3efebf4b';

const RecipeData = ({route, navigation}) => {
    const [RecipeName, setRecipeName] = useState('');
    const [Summary, setSummary] = useState('');
    const [ImageUrl, setImageURL] = useState(''); 
    const [Servings, setServings] = useState('');
    const [AnalysedInstructions, setAnalysedInstructions] = useState([]);
    const [ExtendedIngredients, setExtendedIngredients ] = useState([]);

    //Get the recipe information of the selected recipe and set it to the state values on Screen Start
    useEffect(() => {
        getRecipeData(route.params.paramKey)
      }, [])

    return(
    <ScrollView>
        <Card>

        <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  ImageUrl,
              }}
            />
        <Text>Name: {RecipeName}</Text>
        <Text>Servings: {Servings}</Text>
        <HTMLView value={Summary} />
        <Text>Ingredients:</Text>
        {ExtendedIngredients.map((ingredient) => {
            <View key={ingredient.id}>
                <Text>{ingredient.original}</Text>
            </View>
        })}
        {/* {AnalysedInstructions.map((instruction) => {
            <View key={instruction.id}>
                <Text>{}</Text>
            </View>
        })} */}
        </Card>
    </ScrollView>);

    function getRecipeData(x) {
        axios.get(recipeDataURL + x + '/information?includeNutrition=false&' + apiKey)
        .then((response) => {
            setRecipeName(response.data.title);
            setSummary(response.data.summary);
            setImageURL(response.data.image);
            setServings(response.data.servings);
            setAnalysedInstructions(response.data.analysedInstructions);
            setExtendedIngredients(response.data.extendedIngredients);
            console.log(response.data.image);
        })
    }
}

export default RecipeData