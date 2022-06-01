import React, { useState, useEffect, Fragment } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './Recipes.css';
import axios from 'axios';

const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true'

const apiKey = 'apiKey=56a028ffc4c4471db778d28f3efebf4b'


function Recipes() {
    const [recipeList, setRecipeList] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    function getRecipeList(x) {
        axios.get(apiUrl + x + apiKey)
          .then((response) => {setRecipeList(response.data.results); console.log(response)})
          .catch((error) => {
            console.log(error);
          });
      }
    //Get the list of recipes with the information inputted in the home screen
    //and set it to the recipeList array on Screen Start
    useEffect(() => {
        getRecipeList(location.state.paramKey);
        console.log(location.state.paramKey);
    }, [])
    return(
            <div className="App">
            <div>
                <h3 className='Main-Text'>SOUS CHEF</h3>
            </div>
          <header className="App-header">
            <div className='Recipes-Main'>
                    {/* {recipeList.length ?
                        <div className='No-Recipes'>
                            <h2 className='Main-Text'>Sorry, we couldn't find a recipe for you in our database</h2>
                        </div> :
                        <div className='Recipe-List'>
                            {recipeList.map((item) => {
                                return(
                                    <div className='Options-Card' key={item.id}>
                                        
                                    </div> 
                                )
                            })}
                        </div>
                    } */}
                    {recipeList.map((item) => {
                        return(
                        <div key={item.id} className='Options-Card'>
                            <h3 className='Header-Text'>{item.title}</h3>
                            <img
                                className='Image'
                                src= {item.image}
                                />
                            <button className='Button-Text' onClick={()=> {navigate('/RecipeData', {state: item.id,})}}>
                             SHOW ME THE RECIPE!
                            </button>
                        </div>
                        )
                    })}
                </div>
          </header>
        </div>
            
    );
}

export default Recipes