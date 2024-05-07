import { StyleSheet, Text, View, Image, Vibration, TouchableOpacity } from 'react-native';

import InputEdit from '../../Components/InputEdit/Inputs';
import styles from './Style';
import { useEffect, useState } from 'react';
import Buttons from '../../Components/Buttons/Buttons';
import { useGetGroup, group } from '../../hooks/useGetGroup';
import Loading from '../../Components/Loading/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../type';
import { user } from '../../hooks/useRegister';
import cloudinary from '../../Services/cloudinary';
import { useGetGroupUserId } from '../../hooks/useGetGroupUserId';
import {useAddMural} from '../../hooks/useAddMural'
import ShowMural from '../../Components/ShowMural/ShowMural';
import { useGetWallsGroup, wall } from '../../hooks/useGetWallsGroup';
import React from 'react';

type MuralScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Mural'>;


type Props = {
  navigation: MuralScreenNavigationProp;
};


export default function SeeMural({navigation}:Props) {
 
    const [imgGroup, setImgGroup] = useState()
    const [codGroup, setCodGroup] = useState("01234567")
    const [nameGroup, setNameGroup] = useState("Grupo")
    const {authenticationAddG} = useGetGroupUserId()
    const {authenticationWG} = useGetWallsGroup()
    const [Murals, setMurals] = useState<wall[]>()

    useEffect(()=>{
        AsyncStorage.getItem('@userInfor')
            .then(async (value) => {
                const userInfor = JSON.parse(value!);
                const userInformation:user = userInfor.data
                console.log(userInformation.id)
                const group = authenticationAddG(userInformation.id!)
                group.then((element) =>{
                  console.log(element)
                  setImgGroup(element.imgGroup)
                  setNameGroup(element.name)
                  setCodGroup(element.groupCode)
                  console.log(element)
                  const muralGet = authenticationWG(element.id)
                  muralGet.then((data:wall[])=>{
                    setMurals(data)
                    console.log(data)
                })
                })
            })
            .catch((error) => {
              console.error('Erro ao recuperar informações do usuário:', error);
            });
      },[])

      const deleteMural = (id: number) =>{
        const listaMural = Murals
        const newList = listaMural?.filter(idMural=> idMural.id !== id)
        setMurals(newList)
      }

  return (
    <View style={styles.allSeeMural}>
        <View style={styles.inforLogo}>
            <TouchableOpacity onPress={()=>{
                navigation.goBack()
            }}>
                <Image style={styles.imgArrow} source={require('../../../assets/seta-direita.png')}/>
            </TouchableOpacity>
            <Image style={styles.imgMural} source={require('../../../assets/LogoMural.png')}/>
      </View>
      <View style={styles.SeeMural}>
            <View style={styles.SeeMuralGroup}>
                {imgGroup?(
                    <Image source={{ uri: imgGroup }} style={{ width: 180, height: 180, borderRadius: 100, alignSelf: "center", }}/>
                ):(
                    <Image source={require('../../../assets/trabalho.png')} style={{ width: 160, height: 160, borderRadius: 100,borderWidth: 1, borderColor: "black", alignSelf: "center",}} />
                )}
                <Text style={styles.TextGroupMural}>{nameGroup}</Text>
                <Text style={styles.TextGroupMuralCod}>Cod: {codGroup}</Text>
            </View>
            <View style={styles.SeeMuralInfor}>
                {Murals && Murals.length !== 0?(
                    Murals.map((value)=>(
                        <ShowMural authentication={()=>{
                            deleteMural(value.id)
                        }} img={value.imgMural} name={value.name} idMural={value.id} key={value.id} canceled={true}/>
                    ))
                ): null}
            </View>
            <View style={{alignSelf:"center", marginTop: 35}}>
                <Buttons textButton='Cadastrar' Condition={true} authentication={()=>{

                }}/>
            </View>

      </View>
    </View>
  );
}