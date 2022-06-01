import './Home.css';
import {useNavigate} from 'react-router-dom';
import React, {Fragment} from 'react';
import {useState} from 'react';
import {MdFastfood, MdOutlineLocalDrink} from 'react-icons/md';
import {BsFillEggFill} from 'react-icons/bs';
import {FaLeaf, FaEgg, FaBreadSlice, FaFish, FaTree} from 'react-icons/fa';
import {GiSwirledShell, GiSesame, GiGrainBundle, GiLindenLeaf, GiWheat, GiFishing, GiCheeseWedge, GiGrain, GiPeanut} from 'react-icons/gi';


function Home() {
  const navigate = useNavigate();
  const [includeIngredients, setIncludeIngredients] = useState([]);
  const [vegetarian, setVegetarian] = useState(false);
  const [lactoVegetarian, setLactoVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [paleo, setPaleo] = useState(false);
  const [ketogenic, setKetogenic] = useState(false);
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
      navigate('/Recipes', {state: { paramKey: param_Key}})
      console.log(param_Key);
  }
  const handleInput = event => {
    setIncludeIngredients(event.target.value);
}
  return (
    <Fragment>
      <div className='Main'>
        <div className="App">
            <div className="Card">
              <h3 className='Main-Text'>Diet (Optional)</h3>
              <hr className='Line'/>
              { !vegetarian?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setVegetarian(true); setIntolerances(diet.concat('Vegetarian')); console.log('pressed')}}>
                    <MdFastfood className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>VEGETARIAN</h3>
                </div>
                :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen VEGETARIAN</h3>
                  <button className='Circular-Button-Dark'  onClick = {() => {setVegetarian(false); const nVegetarian = diet.filter((item) => {return item !== 'Vegetarian'; }) ; setDiet(nVegetarian)}}>
                    <MdFastfood className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>NOT VEGETARIAN</h3>
                </div>
              }
              { !lactoVegetarian?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setLactoVegetarian(true); setDiet(diet.concat('Lacto-Vegetarian'))}}>
                    <BsFillEggFill className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>VEGETARIAN (EGGLESS)</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen VEGETARIAN (EGGLESS)</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setLactoVegetarian(false); const nLactoVegetarian = diet.filter((item) => {return item !== 'Lacto-Vegetarian'; }) ; setDiet(nLactoVegetarian)}}>
                    <BsFillEggFill className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>NOT VEGETARIAN (EGGLESS)</h3>
                </div>
              }
              { !vegan?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setVegan(true); setDiet(diet.concat('Vegan'))}}>
                    <FaLeaf className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>VEGAN</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen VEGAN</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setVegan(false); const nVegan = diet.filter((item) => {return item !== 'Vegan'; }) ; setDiet(nVegan)}}>
                    <FaLeaf className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>NOT VEGAN</h3>
                </div>
              }
              { !glutenFree?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick={() => {setGlutenFree(true); setDiet(diet.concat('Gluten Free'))}}>
                    <GiGrainBundle className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>GLUTEN-FREE</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen GLUTEN-FREE</h3>
                  <button className='Circular-Button-Dark' onClick={() => {setGlutenFree(false); const nGlutenFree = diet.filter((item) => {return item !== 'Gluten Free'; }) ; setDiet(nGlutenFree)}}>
                    <GiGrainBundle className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>NOT GLUTEN-FREE</h3>
                </div>
              }
              { !paleo?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setPaleo(true); setDiet(diet.concat('Paleo'))}}>
                    <GiLindenLeaf  className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>PALEO</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen PALEO</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setPaleo(false); const nPaleo = diet.filter((item) => {return item !== 'Paleo'; }) ; setDiet(nPaleo)}}>
                    <GiLindenLeaf  className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>NOT PALEO</h3>
                </div>
              }
              { !ketogenic?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setKetogenic(true); setDiet(diet.concat('Ketogenic'))}}>
                    <GiWheat  className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>KETOGENIC</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chose Ketogenic</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setKetogenic(false); const nKeto = diet.filter((item) => {return item !== 'Ketogenic'; }) ; setDiet(nKeto)}}>
                    <GiWheat  className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>NOT KETOGENIC</h3>
                </div>
              }
              {!pescatarian?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setPescatarian(true); setDiet(diet.concat('Pescatarian'))}}>
                    <GiFishing  className='Icon-Style' />
                  </button>
                  <h4 className='Sub-Text'>PESCATARIAN</h4>
                </div>:
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen PESCATARIAN</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setPescatarian(false); const nPescatarian = diet.filter((item) => {return item !== 'Pescatarian'; }) ; setDiet(nPescatarian)}}>
                    <GiFishing  className='Icon-Style' />
                  </button>
                  <h4 className='Sub-Text-Dark'>NOT PESCATARIAN</h4>
                </div>
              }
            </div>
            <div className="Card">
              <h3 className='Main-Text'>INTOLERANCES (OPTIONAL)</h3>
              <hr className='Line'/>
              {!dairy?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setDairy(true); setIntolerances(intolerances.concat('Dairy'))}}>
                    <GiCheeseWedge className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>DAIRY</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without DAIRY</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setDairy(false); const nDairy = intolerances.filter((item) => {return item !== 'Dairy'; }) ; setIntolerances(nDairy)}}>
                    <GiCheeseWedge className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH DAIRY</h3>
                </div>
              }
              {!egg?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setEgg(true); setIntolerances(intolerances.concat('Egg'))}}>
                    <FaEgg className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>EGG</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without EGG</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setEgg(false); const nEgg = intolerances.filter((item) => {return item !== 'Egg'; }) ; setIntolerances(nEgg)}}>
                    <FaEgg className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH EGG</h3>
                </div>
              }
              {!gluten?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setGluten(true); setIntolerances(intolerances.concat('Gluten'))}}>
                    <FaBreadSlice className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>GLUTEN</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without GLUTEN</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setGluten(false); const nGluten = intolerances.filter((item) => {return item !== 'Gluten'; }) ; setIntolerances(nGluten)}}>
                    <FaBreadSlice className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH GLUTEN</h3>
                </div>
              }
              {!grain?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setGrain(true); setIntolerances(intolerances.concat('Grain'))}}>
                    <GiGrain className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>GRAIN</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without GRAIN</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setGrain(false); const nGrain = intolerances.filter((item) => {return item !== 'Grain'; }) ; setIntolerances(nGrain)}}>
                    <GiGrain className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH GRAIN</h3>
                </div>
              }
              {!peanut?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setPeanut(true); setIntolerances(intolerances.concat('Peanut'))}}>
                    <GiPeanut className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>PEANUTS</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without PEANUTS</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setPeanut(false); const nPeanut = intolerances.filter((item) => {return item !== 'Peanut'; }) ; setIntolerances(nPeanut)}}>
                    <GiPeanut className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH PEANUTS</h3>
                </div>
              }
              {!seafood?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setSeafood(true); setIntolerances(intolerances.concat('Seafood'))}}>
                    <FaFish className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>SEAFOOD</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without SEAFOOD</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setSeafood(false); const nSeafood = intolerances.filter((item) => {return item !== 'Seafood'; }) ; setIntolerances(nSeafood)}}>
                    <FaFish className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH SEAFOOD</h3>
                </div>
              }
              {!sesame?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setSesame(true); setIntolerances(intolerances.concat('Sesame'))}}>
                    <GiSesame className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>SESAME</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without SESAME</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setSesame(false); const nSesame = intolerances.filter((item) => {return item !== 'Sesame'; }) ; setIntolerances(nSesame)}}>
                    <GiSesame className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH SESAME</h3>
                </div>
              }
              {!soy?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setSoy(true); setIntolerances(intolerances.concat('Soy'))}}>
                    <MdOutlineLocalDrink className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>SOY</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without SOY</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setSoy(false); const nSoy = intolerances.filter((item) => {return item !== 'Soy'; }) ; setIntolerances(nSoy)}}>
                    <MdOutlineLocalDrink className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH SOY</h3>
                </div>
              }
              {!shellfish?
                <div className='Button-Group'>
                  <button className='Circular-Button'  onClick = {() => {setShellfish(true); setIntolerances(intolerances.concat('Shellfish'))}}>
                    <GiSwirledShell className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>SHELLFISH</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without SHELLFISH</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setShellfish(false); const nShellfish = intolerances.filter((item) => {return item !== 'Shellfish'; }) ; setIntolerances(nShellfish)}}>
                    <GiSwirledShell className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH SHELLFISH</h3>
                </div>
              }
              {!treeNut?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setTreeNut(true); setIntolerances(intolerances.concat('TreeNut'))}}>
                    <FaTree className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>TREE NUTS</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without TREE NUTS</h3>
                  <button className='Circular-Button-Dark'  onClick = {() => {setTreeNut(false); const nTreeNut = intolerances.filter((item) => {return item !== 'TreeNut'; }) ; setIntolerances(nTreeNut)}}>
                    <FaTree className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH TREE NUTS</h3>
                </div>
              }
              {!wheat?
                <div className='Button-Group'>
                  <button className='Circular-Button' onClick = {() => {setWheat(true); setIntolerances(intolerances.concat('Wheat'))}}>
                    <GiWheat className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text'>WHEAT</h3>
                </div> :
                <div className='Button-Group'>
                  <h3 className='Sub-Text'>You have chosen recipes without WHEAT</h3>
                  <button className='Circular-Button-Dark' onClick = {() => {setWheat(false); const nWheat = intolerances.filter((item) => {return item !== 'Wheat'; }) ; setIntolerances(nWheat)}}>
                    <GiWheat className='Icon-Style'/>
                  </button>
                  <h3 className='Sub-Text-Dark'>I'M OK WITH WHEAT</h3>
                </div>
              }
            </div>
            <div className="Card">
              <h3 className='Main-Text'>Choose the ingredients you have:</h3>
              <hr className='Line'/>
                <div className='Check-Row'>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox'
                      checked={Onion}
                      onChange={()=>{
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
                    />
                    Onion
                  </label>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox' 
                      checked={Tomato}
                      onChange={()=>{
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
                    />
                    Tomato
                  </label>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox'
                      checked={Potato}
                      onChange={()=>{
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
                    />
                    Potato
                  </label>
                </div>
                <div className='Check-Row'>
                  <label className='Check-Text'>
                      <input className='Check' 
                        type='checkbox'
                        checked={Garlic}
                        onChange={()=>{
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
                      />
                      Garlic
                  </label>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox'
                      checked={Ginger}
                      onChange={()=>{
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
                    />
                    Ginger
                  </label>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox'
                      checked={Rice}
                      onChange={()=>{
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
                    />
                    Rice
                  </label>
                </div>
                <div className='Check-Row'>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox'
                      checked={Bread}
                      onChange={()=>{
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
                    />
                    Bread
                  </label>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox'
                      checked={Cheese}
                      onChange={()=>{
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
                    />
                    Cheese
                  </label>
                  <label className='Check-Text'>
                    <input className='Check' 
                      type='checkbox'
                      checked={Lettuce}
                      onChange={()=>{
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
                    />
                    Lettuce
                  </label>
                </div>
              <h3 className='Main-Text'>Type any other ingredients you have here:</h3>
              <hr  className='Line'/>
              <input type='text' className='Ingredients-Input' placeholder='tomato, cheese, bread, etc.' onChange={handleInput} />
              <button className='Submit-Button' onClick={Submit}>
                  FIND ME A RECIPE
              </button>
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
