import styles from './Style';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import {useDeleteMural} from "../../hooks/useDeleteMural";
import React from 'react';

type AuthShowMuralProps = {
    img?: string;
    name: string;
    category: string;
}

export default function Title({ name, img ,category}: AuthShowMuralProps){

   
   
    return(
        <View style={styles.allTitle}>
            <View style={styles.viewImageTitle}>
                {img?(
                        <Image source={{ uri: img }} style={{ width: 45, height: 45, borderRadius: 100}}/>
                    ):(
                        <Image source={require('../../../assets/trabalho.png')} style={{ width: 45, height: 45, borderRadius: 100,borderWidth: 1, borderColor: "black"}} />
                )}
                <View style={styles.viewNameTitle}>
                    <Text style={styles.titleOne}>{name}</Text>
                    <Text style={styles.titleTwo}>@{category.toLowerCase()}</Text>
                </View>
                
            </View>
            <TouchableOpacity onPress={()=>{

            }} style={styles.imgViewLogo}>
                 <Image style={styles.imgMural} source={require('../../../assets/LogoMural.png')} />
            </TouchableOpacity>
        </View>
    );
}