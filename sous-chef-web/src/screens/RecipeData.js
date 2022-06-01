import React, {Fragment, useEffect, useState} from 'react';
import './RecipeData.css';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios'; 

const RecipeData = () => {
    const recipeDataURL = 'https://api.spoonacular.com/recipes/';
    const apiKey = 'apiKey=56a028ffc4c4471db778d28f3efebf4b';
    const location = useLocation();
    const navigate = useNavigate();
    const [RecipeName, setRecipeName] = useState('');
    const [Summary, setSummary] = useState('');
    const [ImageUrl, setImageURL] = useState(''); 
    const [Servings, setServings] = useState('');
    const [ExtendedIngredients, setExtendedIngredients ] = useState([]);
    const [Instructions, setInstructions ] = useState();
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
    //Get the recipe information of the selected recipe and set it to the state values on Screen Start
    useEffect(() => {
        getRecipeData(location.state)
      }, [])
    return(
        <div className="App">
            <div>
                <h3 className='Main-Text'>SOUS CHEF</h3>
            </div>
            <header className="App-header">
                <div className='RecipeData-Main'>
                    <div className='Card'>
                        <img className='Image' src={ImageUrl} />
                        <h3 className='Header-Text'>{RecipeName}</h3>
                        <h4 className='Option-Text'>Ingredients:</h4>
                        {ExtendedIngredients.map((ing) => {
                            return(
                                <div key={ing.id}>
                                    <h4 className='Ingredients-Text'>-{ing.originalName}</h4>
                                </div>
                            );
                        })}
                       <h3 className='Option-Text'>Recipe:</h3>
                       <div className="Container" dangerouslySetInnerHTML={{__html: Instructions}}></div>
                       <h3 className='Option-Text'>Servings: {Servings}</h3>  
                       <button className='Button' onClick= {() => {navigate('/');}}>Back Home</button>
                    </div>
                </div>
            </header>
        </div>
        
    );
}

export default RecipeData