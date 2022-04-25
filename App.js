import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Recipes from './screens/Recipes';
import RecipeData from './screens/RecipeData';
import { AdMobBanner } from 'expo-ads-admob'

const color = "#5EC87C";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <AdMobBanner 
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-7021618864134355/4250418770" 
      />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home'  
          component={Home} 
          options={{
            title: 'SOUS CHEF',
            headerTintColor: color,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            }} />
        <Stack.Screen 
          name="Recipes" 
          component={Recipes} 
          options={{
            title: 'RECIPES',
            headerTintColor: color,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            }} />
        <Stack.Screen 
          name="RecipeData" 
          component={RecipeData} 
          options={{
            title: 'RECIPE',
            headerTintColor: color,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StackNavigator />
    // <NavigationContainer>
    //     <Tab.Navigator 
    //       initialRouteName='RecipeStack'
    //       screenOptions={({ route }) => ({

    //         tabBarIcon: ({ focused }) => {
    //           let iconName;
    //           let size=25;
    //           let color = focused ? color : 'gray';
    //           if (route.name === 'RecipeStack') {
    //             iconName = 'home';
  
    //             return <AntDesign name={iconName} size={size} color={color} />;
    //           } else if (route.name === 'Profile') {
    //             iconName = 'user';
  
    //             return <AntDesign name={iconName} size={size} color={color} />;
    //           }
    //         },
    //         tabBarLabel: ({ focused }) => {
    //           let titleStyle = {
    //             fontSize: 12,
    //             fontWeight: focused ? 'bold' : '500',
    //             color: focused ? color : 'gray',
    //           };
    //           if (route.name === 'RecipeStack') {
    //             return <Text style={titleStyle}>RECIPES</Text>;
    //           } else if (route.name === 'Profile') {
    //             return <Text style={titleStyle}>PROFILE</Text>;
    //         }
    //       }
    //     }
    //     )}>
    //       <Tab.Screen name="RecipeStack" component={StackNavigator} options={{headerShown: false}} />
    //       <Tab.Screen 
    //         name="Profile" 
    //         component={Profile} 
    //         options={{
    //           title: 'PROFILE',
    //           headerTintColor: color,
    //           headerTitleStyle: {
    //             fontWeight: 'bold',
    //           },}}/>
    //     </Tab.Navigator>
    // </NavigationContainer>
  );
}
