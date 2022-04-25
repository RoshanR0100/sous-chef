import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, Pressable} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Line from '../shared/Line';
import CheckBox  from 'react-native-check-box';
const color = "#5EC87C";
const darkColor = "#349850";
const yellow ="#f5c71a";


const Home = ({navigation}) => {
    const [includeIngredients, setIncludeIngredients] = useState([]);
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
    const [Onion, setOnion] = useState(false);
    const [Tomato, setTomato] = useState(false);
    const [Garlic, setGarlic] = useState(false);
    const [Ginger, setGinger] = useState(false);
    const [Rice, setRice] = useState(false);
    const [Bread, setBread] = useState(false);
    const [Cheese, setCheese] = useState(false);
    const [Lettuce, setLettuce] = useState(false);
    const [Potato, setPotato] = useState(false);

    const Submit = () => {
        const param_Key = '&includeIngredients=' + includeIngredients +  '&diet=' + diet + '&intolerances=' + intolerances + '&';
        navigation.navigate('Recipes', {paramKey: param_Key});
    }
    
    return (  
        <ScrollView style={styles.mainView}>
            <View style={styles.optionsCard}>
                <Text style={styles.headerText}>DIET (OPTIONAL)</Text>
                <Line />
                <View style={styles.toggleView}>
                    {!vegetarian ?
                        <Pressable style={styles.button} onPress = {() => {setVegetarian(true); setDiet(diet.concat('Vegetarian'))}}>    
                            <View style={styles.circleButton}>
                                <MaterialCommunityIcons name="food-drumstick-off" size={24} color="white" />
                            </View>
                            <Text style={styles.optionText}>VEGETARIAN</Text>
                        </Pressable>
                    :
                        <View>
                            <Text style={styles.optionText}>You have chosen VEGETARIAN</Text>
                            <Pressable style={styles.button} onPress = {() => {setVegetarian(false); const nVegetarian = diet.filter((item) => {return item !== 'Vegetarian'; }) ; setDiet(nVegetarian)}}>    
                                <View style={styles.circleButtonDark}>
                                    <MaterialCommunityIcons name="food-drumstick" size={24} color="white" />
                                </View>
                                <Text style={styles.optionTextDark}>NOT VEGETARIAN</Text>
                            </Pressable>
                        </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!lactoVegetarian ?

                        <Pressable style={styles.button} onPress = {() => {setLactoVegetarian(true); setDiet(diet.concat('Lacto-Vegetarian'))}}>    
                            <View style={styles.circleButton}>
                                <MaterialCommunityIcons name="egg-off" size={24} color="white" />
                            </View>
                            <Text style={styles.optionText}>VEGETARIAN (EGGLESS)</Text>
                        </Pressable>
                    :
                        <View>
                            <Text style={styles.optionText}>You have chosen VEGETARIAN(EGGLESS)</Text>
                                <Pressable style={styles.button} onPress = {() => {setLactoVegetarian(false); const nLactoVegetarian = diet.filter((item) => {return item !== 'Lacto-Vegetarian'; }) ; setDiet(nLactoVegetarian)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <FontAwesome5 name="egg" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>NOT VEGETARIAN(EGGLESS)</Text>
                                </Pressable>
                        </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!vegan ?
                            <Pressable style={styles.button} onPress = {() => {setVegan(true); setDiet(diet.concat('Vegan'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="food-apple" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>VEGAN</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen VEGAN</Text>
                                <Pressable style={styles.button} onPress = {() => {setVegan(false); const nVegan = diet.filter((item) => {return item !== 'Vegan'; }) ; setDiet(nVegan)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="food-drumstick" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>NOT VEGAN</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!glutenFree ?
                            <Pressable style={styles.button} onPress = {() => {setGlutenFree(true); setDiet(diet.concat('Gluten Free'))}}>    
                                <View style={styles.circleButton}>
                                    <FontAwesome5 name="bread-slice" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>GLUTEN-FREE</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen GLUTEN-FREE</Text>
                                <Pressable style={styles.button} onPress = {() => {setGlutenFree(false); const nGlutenFree = diet.filter((item) => {return item !== 'Gluten Free'; }) ; setDiet(nGlutenFree)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <FontAwesome5 name="bread-slice" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>NOT GLUTEN-FREE</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!paleo ?
                            <Pressable style={styles.button} onPress = {() => {setPaleo(true); setDiet(diet.concat('Paleo'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialIcons name="no-food" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>PALEO</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen PALEO</Text>
                                <Pressable style={styles.button} onPress = {() => {setPaleo(false); const nPaleo = diet.filter((item) => {return item !== 'Paleo'; }) ; setDiet(nPaleo)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialIcons name="fastfood" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>NOT PALEO</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!ketogentic ?
                            <Pressable style={styles.button} onPress = {() => {setKetogenic(true); setDiet(diet.concat('Ketogenic'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="barley-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>KETOGENIC</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen KETOGENIC</Text>
                                <Pressable style={styles.button} onPress = {() => {setKetogenic(false); const nKeto = diet.filter((item) => {return item !== 'Ketogenic'; }) ; setDiet(nKeto)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="barley" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>NOT KETOGENIC</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!pescatarian ?
                            <Pressable style={styles.button} onPress = {() => {setPescatarian(true); setDiet(diet.concat('Pescatarian'))}}>    
                                <View style={styles.circleButton}>
                                    <FontAwesome5 name="fish" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>PESCATARIAN</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen PESCATARIAN</Text>
                                <Pressable style={styles.button} onPress = {() => {setPescatarian(false); const nPescatarian = diet.filter((item) => {return item !== 'Pescatarian'; }) ; setDiet(nPescatarian)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="food-steak" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>NOT PESCATARIAN</Text>
                                </Pressable>
                            </View>
                    }
                </View>
            </View>
            <View style={styles.optionsCard}>
                <Text style={styles.headerText}>INTOLERANCES (OPTIONAL)</Text>
                <Line />
                <View style={styles.toggleView}>
                    {!dairy ?
                            <Pressable style={styles.button} onPress = {() => {setDairy(true); setIntolerances(intolerances.concat('Dairy'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="cheese-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>DAIRY</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT DAIRY</Text>
                                <Pressable style={styles.button} onPress = {() => {setDairy(false); const nDairy = intolerances.filter((item) => {return item !== 'Dairy'; }) ; setDiet(nDairy)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="cheese" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I'M OK WITH DAIRY</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!egg ?
                            <Pressable style={styles.button} onPress = {() => {setEgg(true); setIntolerances(intolerances.concat('Egg'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="egg-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>EGG</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT EGG</Text>
                                <Pressable style={styles.button} onPress = {() => {setEgg(false); const nEgg = intolerances.filter((item) => {return item !== 'Egg'; }) ; setDiet(nEgg)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="egg" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I'M OK WITH EGG</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!gluten ?
                            <Pressable style={styles.button} onPress = {() => {setGluten(true); setIntolerances(intolerances.concat('Gluten'))}}>    
                                <View style={styles.circleButton}>
                                    <FontAwesome5 name="bread-slice" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>GLUTEN</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT GLUTEN</Text>
                                <Pressable style={styles.button} onPress = {() => {setGluten(false); const nGluten = intolerances.filter((item) => {return item !== 'Gluten'; }) ; setDiet(nGluten)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <FontAwesome5 name="bread-slice" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT GLUTEN</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!grain ?
                            <Pressable style={styles.button} onPress = {() => {setGrain(true); setIntolerances(intolerances.concat('Grain'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="barley-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>GRAIN</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT GRAIN</Text>
                                <Pressable style={styles.button} onPress = {() => {setGrain(false); const nGrain = intolerances.filter((item) => {return item !== 'Grain'; }) ; setDiet(nGrain)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="barley-off" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT GRAIN</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!peanut ?
                            <Pressable style={styles.button} onPress = {() => {setPeanut(true); setIntolerances(intolerances.concat('Peanut'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="peanut-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>PEANUTS</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT PEANUTS</Text>
                                <Pressable style={styles.button} onPress = {() => {setPeanut(false); const nPeanut = intolerances.filter((item) => {return item !== 'Peanut'; }) ; setDiet(nPeanut)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="peanut" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT PEANUTS</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!seafood ?
                            <Pressable style={styles.button} onPress = {() => {setSeafood(true); setIntolerances(intolerances.concat('Seafood'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="fish-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>SEAFOOD</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT SEAFOOD</Text>
                                <Pressable style={styles.button} onPress = {() => {setSeafood(false); const nSeafood = intolerances.filter((item) => {return item !== 'Seafood'; }) ; setDiet(nSeafood)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="fish" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT SEAFOOD</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!sesame ?
                            <Pressable style={styles.button} onPress = {() => {setSesame(true); setIntolerances(intolerances.concat('Sesame'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="seed-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>SESAME</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT SESAME</Text>
                                <Pressable style={styles.button} onPress = {() => {setSesame(false); const nSesame = intolerances.filter((item) => {return item !== 'Sesame'; }) ; setDiet(nSesame)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="seed" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT SESAME</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!soy ?
                            <Pressable style={styles.button} onPress = {() => {setSoy(true); setIntolerances(intolerances.concat('Soy'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="soy-sauce-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>SOY</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT SOY</Text>
                                <Pressable style={styles.button} onPress = {() => {setSoy(false); const nSoy = intolerances.filter((item) => {return item !== 'Soy'; }) ; setDiet(nSoy)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="soy-sauce" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionText}>I CAN EAT SOY</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!shellfish ?
                            <Pressable style={styles.button} onPress = {() => {setShellfish(true); setIntolerances(intolerances.concat('Shellfish'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="fish-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>SHELLFISH</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT SHELLFISH</Text>
                                <Pressable style={styles.button} onPress = {() => {setShellfish(false); const nShellfish = intolerances.filter((item) => {return item !== 'Shellfish'; }) ; setDiet(nShellfish)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="fish" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT SHELLFISH</Text>
                                </Pressable>
                            </View>
                    }
                </View> 
                <View style={styles.toggleView}>
                    {!treeNut ?
                            <Pressable style={styles.button} onPress = {() => {setTreeNut(true); setIntolerances(intolerances.concat('TreeNut'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="tree" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>TREE NUT</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT TREE NUT</Text>
                                <Pressable style={styles.button} onPress = {() => {setTreeNut(false); const nTreeNut = intolerances.filter((item) => {return item !== 'TreeNut'; }) ; setDiet(nTreeNut)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="tree" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT TREE NUT</Text>
                                </Pressable>
                            </View>
                    }
                </View>
                <View style={styles.toggleView}>
                    {!wheat ?
                            <Pressable style={styles.button} onPress = {() => {setWheat(true); setIntolerances(intolerances.concat('Wheat'))}}>    
                                <View style={styles.circleButton}>
                                    <MaterialCommunityIcons name="barley-off" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>WHEAT</Text>
                            </Pressable>
                        :
                            <View>
                                <Text style={styles.optionText}>You have chosen RECIPES WITHOUT WHEAT</Text>
                                <Pressable style={styles.button} onPress = {() => {setWheat(false); const nWheat = intolerances.filter((item) => {return item !== 'Wheat'; }) ; setDiet(nWheat)}}>    
                                    <View style={styles.circleButtonDark}>
                                        <MaterialCommunityIcons name="barley" size={24} color="white" />
                                    </View>
                                    <Text style={styles.optionTextDark}>I CAN EAT WHEAT</Text>
                                </Pressable>
                            </View>
                    }
                </View>
            </View>
                      
            <View style={styles.optionsCard}>
                <Text style={styles.headerText}>Choose the ingredients you have: </Text>
                <Line />
                <View style={styles.toggleView}>
                    <CheckBox 
                        onClick={()=>{
                            if(!Onion) 
                            {
                                setOnion(!Onion);
                                setIncludeIngredients(includeIngredients.concat('Onion'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Onion'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setOnion(!Onion)
                            }
                        }}
                        isChecked={Onion}
                    />
                    <Text>Onion</Text>
                    <CheckBox
                        onClick={()=>{
                            if(!Tomato) 
                            {
                                setTomato(!Tomato);
                                setIncludeIngredients(includeIngredients.concat('Tomato'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Tomato'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setTomato(!Tomato)
                            }
                        }}
                        isChecked={Tomato}
                    />
                    <Text>Tomato</Text>
                    <CheckBox
                        onClick={()=>{
                            if(!Potato) 
                            {
                                setPotato(!Potato);
                                setIncludeIngredients(includeIngredients.concat('Potato'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Potato'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setPotato(!Potato)
                            }
                        }}
                        isChecked={Potato}
                    />
                    <Text>Potato</Text>
                </View>
                <View style={styles.toggleView}>
                    <CheckBox 
                        onClick={()=>{
                            if(!Garlic) 
                            {
                                setGarlic(!Garlic);
                                setIncludeIngredients(includeIngredients.concat('Garlic'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Garlic'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setGarlic(!Garlic)
                            }
                        }}
                        isChecked={Garlic}
                    />
                    <Text>Garlic</Text>
                    <CheckBox 
                        onClick={()=>{
                            if(!Ginger) 
                            {
                                setGinger(!Ginger);
                                setIncludeIngredients(includeIngredients.concat('Ginger'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Ginger'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setGinger(!Ginger)
                            }
                        }}
                        isChecked={Ginger}
                    />
                    <Text>Ginger</Text>
                    <CheckBox 
                        onClick={()=>{
                            if(!Rice) 
                            {
                                setRice(!Rice);
                                setIncludeIngredients(includeIngredients.concat('Rice'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Rice'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setRice(!Rice)
                            }
                        }}
                        isChecked={Rice}
                    />
                    <Text>Rice</Text>
                </View>
                <View style={styles.toggleView}>
                    <CheckBox 
                        onClick={()=>{
                            if(!Bread) 
                            {
                                setBread(!Bread);
                                setIncludeIngredients(includeIngredients.concat('Bread'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Bread'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setBread(!Bread)
                            }
                        }}
                        isChecked={Bread}
                    />
                    <Text>Bread</Text>
                    <CheckBox 
                        onClick={()=>{
                            if(!Cheese) 
                            {
                                setCheese(!Cheese);
                                setIncludeIngredients(includeIngredients.concat('Cheese'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Cheese'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setCheese(!Cheese)
                            }
                        }}
                        isChecked={Cheese}
                    />
                    <Text>Cheese</Text>
                    <CheckBox 
                        onClick={()=>{
                            if(!Lettuce) 
                            {
                                setLettuce(!Lettuce);
                                setIncludeIngredients(includeIngredients.concat('Lettuce'));
                            }
                            else
                            {
                                const nIngredient = includeIngredients.filter((item) => {return item !== 'Lettuce'; }) ; 
                                setIncludeIngredients(nIngredient);
                                setLettuce(!Lettuce)
                            }
                        }}
                        isChecked={Lettuce}
                    />
                    <Text>Lettuce</Text>
                </View>
                <Text style={styles.headerText}>Type any other ingredients you have here:</Text>
                <Line />
                <TextInput
                    type="TextInput"
                    style={styles.input}
                    onChangeText = {setIncludeIngredients}
                    placeholder="tomato, cheese, bread, etc."
                />
                <Pressable onPress={Submit}>
                    <Text style={styles.optionText}>FIND ME A RECIPE</Text>
                </Pressable>
            </View>
            
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
        fontSize: 20,
        color: color,
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
        justifyContent: "space-evenly",
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    circleButton: {
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 50,
        height: 50,
        backgroundColor: color,
        alignItems: 'center',
    },
    circleButtonDark: {
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 50,
        height: 50,
        backgroundColor: yellow,
        alignItems: 'center',
    },
    optionText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: color
    },
    optionTextDark: {
        fontWeight: 'bold',
        fontSize: 15,
        color: yellow,
    }
});