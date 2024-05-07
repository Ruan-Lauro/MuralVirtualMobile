import React from 'react';
import Login from './src/Screens/Login/Login';
import First from './src/Screens/First/First'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/Screens/Register/Register';
import { NavigationContainer } from '@react-navigation/native';
import ChooseOne from './src/Screens/ChooseOne/ChooseOne';
import CodGroup from './src/Screens/CodGroup/CodGroup';
import ChooseCategory from './src/Screens/ChooseCategory/ChooseCategory';
import InforGroupMember from './src/Screens/InforGroupMember/InforGroupMember';
import Group from './src/Screens/Group/Group';
import Mural from './src/Screens/Mural/Mural';
import { StatusBar } from 'react-native';
import SeeMurals from './src/Screens/SeeMurals/SeeMurals';
import ChooseGroup from './src/Screens/ChooseGroup/ChooseGroup';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    // <Routes/>
    // <Login/>
  //  <Register/>
   <NavigationContainer>
    <StatusBar backgroundColor="white" barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='First' component={First}/>   
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='ChooseOne' component={ChooseOne}/>  
        <Stack.Screen name='CodGroup' component={CodGroup}/>
        <Stack.Screen name='ChooseCategory' component={ChooseCategory}/>
        <Stack.Screen name='InforGroupMember' component={InforGroupMember}/>
        <Stack.Screen name='Group' component={Group}/>
        <Stack.Screen name='Mural' component={Mural}/>
        <Stack.Screen name='SeeMurals' component={SeeMurals}/> 
        <Stack.Screen name='ChooseGroup' component={ChooseGroup}/>   
      </Stack.Navigator>
   </NavigationContainer>
  );
}

