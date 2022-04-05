import React, {useState, useEffect} from 'react';
import {Button, View, TextInput, StyleSheet, Text, ScrollView, Switch} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {Card}  from 'react-native-elements';

const Home = ({navigation}) => {
    const [includeIngredients, setIncludeIngredients] = useState("");
    const [vegetarian, setVegetarian] = useState(false);
    const [lactoVegetarian, setLactoVegetarian] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [paleo, setPaleo] = useState(false);
    const [ketogentic, setKetogenic] = useState(false);
    const [pescatarian, setPescatarian] = useState(false);
    const [dairy, setDairy] = useState(false);
    const [egg, setEgg] = useState(false);
    const [gluten, setGluten] = useState(false);
    const [grain, setGrain] = useState(false);
    const [peanut, setPeanut] = useState(false);
    const [seafood, setSeafood] = useState(false);
    const [sesame, setSesame] = useState(false);
    const [shellfish, setShellfish] = useState(false);
    const [soy, setSoy] = useState(false);
    const [treeNut, setTreeNut] = useState(false);
    const [wheat, setWheat] = useState(false);
    const [diet, setDiet] = useState([]);
    const [intolerances, setIntolerances] = useState([]);

    const isFocused = useIsFocused();

    //useEffect (Submit,[isFocused]);
    
    const Submit = () => {
        if (vegetarian){
            setDiet((diet) => diet.concat("Vegetarian"))
        }
        if (lactoVegetarian){
            setDiet((diet) => diet.concat("Lacto-Vegetarian"))
        }
        if (vegan){
            setDiet((diet) => diet.concat("Vegan"))
        }
        if (glutenFree){
            setDiet((diet) => diet.concat("GlutenFree"))
        }
        if (paleo){
            setDiet((diet) => diet.concat("Paleo"))
        }
        if (ketogentic){
            setDiet((diet) => diet.concat("Ketogenic"))
        }
        if (pescatarian){
            setDiet((diet) => diet.concat("Pescatarian"))
        }
        if (dairy){
            setIntolerances((intolerances) => intolerances.concat("Dairy"))
        }
        if (egg){
            setIntolerances((intolerances) => intolerances.concat("Egg"))
        }
        if (gluten){
            setIntolerances((intolerances) => intolerances.concat("Gluten"))
        }
        if (grain){
            setIntolerances((intolerances) => intolerances.concat("Grain"))
        }
        if(peanut){
            setIntolerances((intolerances) => intolerances.concat("Peanut"))
        }
        if (seafood){
            setIntolerances((intolerances) => intolerances.concat("Seafood"))
        }
        if (sesame){
            setIntolerances((intolerances) => intolerances.concat("Sesame"))
        }
        if (shellfish){
            setIntolerances((intolerances) => intolerances.concat("Shellfish"))
        }
        if (soy){
            setIntolerances((intolerances) => intolerances.concat("Soy"))
        }
        if (treeNut){
            setIntolerances((intolerances) => intolerances.concat("TreeNut"))
        }
        if (wheat){
            setIntolerances((intolerances) => intolerances.concat("Wheat"))
        }
        const param_Key = '&includeIngredients=' + includeIngredients +  '&diet=' + diet + '&intolerances=' + intolerances + '&';
        navigation.navigate('Recipes', {paramKey: param_Key,})
    }

    const color = "#5EC87C";

    return (  
        <ScrollView style={styles.mainView}>
            <View style={styles.headerTextDiv}>
                <Text style={styles.headerText}>
                    Before we recommend you a recipe, let us know if you have any dietary restrictions, intolerances or allergies
                </Text>
            </View>
            <Card style={styles.optionsCard}>
                <Card.Title>DIET (OPTIONAL)</Card.Title>
                <Card.Divider />
                <View style={styles.toggleView}>
                    <Text>Vegetarian</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setVegetarian(!vegetarian)}}
                        value={vegetarian}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Vegetarian(eggless)</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setLactoVegetarian(!lactoVegetarian)}}
                        value={lactoVegetarian}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Vegan</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setVegan(!vegan)}}
                        value={vegan}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Gluten Free</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setGlutenFree(!glutenFree)}}
                        value={glutenFree}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Paleo</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setPaleo(!paleo)}}
                        value={paleo}
                    />  
                </View>
                <View style={styles.toggleView}>
                    <Text>Ketogenic</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setKetogenic(!ketogentic)}}
                        value={ketogentic}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Pescatarian</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setPescatarian(!pescatarian)}}
                        value={pescatarian}
                    />
                </View>
            </Card>
            <Card style={styles.optionsCard}>
                <Card.Title>INTOLERANCES (OPTIONAL)</Card.Title>
                <Card.Divider />
                <View style={styles.toggleView}>
                    <Text>Dairy</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setDairy(!dairy)}}
                        value={dairy}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Egg</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setEgg(!egg)}}
                        value={egg}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Gluten</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setGluten(!gluten)}}
                        value={gluten}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Grain</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setGrain(!grain)}}
                        value={grain}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Peanut</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setPeanut(!peanut)}}
                        value={peanut}
                    />  
                </View>
                <View style={styles.toggleView}>
                    <Text>Seafood</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setSeafood(!seafood)}}
                        value={seafood}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Sesame</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setSesame(!sesame)}}
                        value={sesame}
                    />
                </View> 
                <View style={styles.toggleView}>
                    <Text>Shellfish</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setShellfish(!shellfish)}}
                        value={shellfish}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Soy</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setSoy(!soy)}}
                        value={soy}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Tree Nut</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setTreeNut(!treeNut)}}
                        value={treeNut}
                    />
                </View>
                <View style={styles.toggleView}>
                    <Text>Wheat</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: color }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setWheat(!wheat)}}
                        value={wheat}
                    />
                </View>
            </Card>
                      
            <Card>
                <Card.Title>Type the ingredients you have here:</Card.Title>
                <Card.Divider />
                <TextInput
                    type="TextInput"
                    style={styles.input}
                    onChangeText = {setIncludeIngredients}
                    placeholder="tomato, cheese, bread, etc."
                />
                <Button 
                    color= {color} 
                    style={styles.button} 
                    title='Find me a recipe'
                    type='submit'
                    onPress={Submit}
                />
            </Card>
            
        </ScrollView> );
}

export default Home;

const styles = StyleSheet.create({
    headerTextDiv: {
        justifyContent: 'space-around',
        padding: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    mainView: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    toggleView: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
    button: {
        margin: 10,
        maxWidth: "60%",
    },
    optionsCard: {
        alignItems: 'center',  
        borderRadius: 45,
        margin: 20,
    }
});