import { StyleSheet, Text, View, Image, Vibration, TouchableOpacity } from 'react-native';


import Input from '../../Components/Inputs/Inputs';
import styles from './Style';
import { useEffect, useState } from 'react';
import Buttons from '../../Components/Buttons/Buttons';
import { useGetGroup, group } from '../../hooks/useGetGroup';
import Loading from '../../Components/Loading/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetWallsGroup, wall} from '../../hooks/useGetWallsGroup'
import { useAddMember } from '../../hooks/useAddMember';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../type';
import { RouteProp } from '@react-navigation/native';
import { user } from '../../hooks/useRegister';
import Title from '../../Components/Title/Title'
import Routes from '../../Navigation';
import React from 'react';


type ChooseCategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ChooseGroup'>;




type Props = {
  navigation: ChooseCategoryScreenNavigationProp;
};




export default function ChooseCategory({navigation}:Props) {

   
    

  return (
    <View style={styles.allChooseGroup}>
        <Title name='Laís Martins' category='Laís'/>
        <Routes/>
    </View>
  );
}