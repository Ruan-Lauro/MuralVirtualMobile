import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Home from '../Screens/Home/Home';
import UserPost from '../Screens/UserPost/UserPost';
import ChooseGroup from '../Screens/ChooseGroup/ChooseGroup';
import Profile from '../Screens/Profile/Profile'
import {Feather} from '@expo/vector-icons'
import First from '../Screens/First/First';
import Configuration from '../Screens/Configuration/Configuration';
import React from 'react';


const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle:{
            alignSelf:"center",
            height: 80,
            width: "88%",
            borderTopWidth: 0,
            borderRadius: 40,
        }
        
        }} >
            <Tab.Screen name='Perfil' component={Profile} options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Image style={{width: 43, height: 43,}} source={require("../../assets/perfil.png")}/>
                    }

                    return <Image style={{width: 35, height: 35}} source={require("../../assets/perfil.png")}/>
                },
            }}/>
            <Tab.Screen name='Grupos' component={ChooseGroup}  options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Image style={{width: 66, height: 43}} source={require("../../assets/grupon.png")}/>
                    }

                    return <Image style={{width: 55, height: 35}} source={require("../../assets/grupon.png")}/>
                },
            }}/>
            <Tab.Screen name='Home' component={Home}  options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Image style={{width: 48, height: 48}} source={require("../../assets/Home.png")}/>
                    }
                    return <Image style={{width: 40, height: 40}} source={require("../../assets/Home.png")}/>
                },
            }}/>
            <Tab.Screen name='Posts' component={UserPost}  options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Image style={{width: 43, height: 43}} source={require("../../assets/postagens.png")}/>
                    }
                    return <Image style={{width: 35, height: 35}} source={require("../../assets/postagens.png")}/>
                },
            }}/>
            <Tab.Screen name='Sair' component={Configuration}  options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Image style={{width: 43, height: 43}} source={require("../../assets/configuracoes.png")}/>
                    }
                    return <Image style={{width: 35, height: 35}} source={require("../../assets/configuracoes.png")}/>
                } ,
            }}/>
        </Tab.Navigator>
    )
}