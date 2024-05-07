import styles from './Style';
import { View, StyleSheet, Image, Text } from 'react-native';
import {useDeleteMural} from "../../hooks/useDeleteMural";
import React from 'react';

type AuthShowMuralProps = {
    img: string;
    authentication: () => void ;
    name: string;
    idMural: number | string;
    canceled: boolean;
}

export default function ShowMural({img, authentication, name, idMural, canceled}: AuthShowMuralProps){

    const {authenticationRM} = useDeleteMural()
   
    return(
        <View style={styles.ShowMural}>
            <View style={styles.ShowMuralInfor}>
                <Image source={{ uri: img }} style={styles.ShowMuralImg}/>
                <View style={styles.ShowMuralViewText}>
                    <Text style={styles.ShowMuralText}>{name}</Text>
                    <Text style={styles.ShowMuralTextSecond} >@{name.toLowerCase()}</Text>
                </View>
            </View>
            {canceled?(
                <Text style={{marginRight: 25, fontSize: 20}} onPress={()=>{
                    authenticationRM(idMural)
                    authentication()
                }}>X</Text>
            ): null}
        </View>
    );
}