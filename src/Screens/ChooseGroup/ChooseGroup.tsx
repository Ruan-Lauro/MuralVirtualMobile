import { StyleSheet, Text, View, Image, Vibration, TouchableOpacity, ScrollView } from 'react-native';


import Input from '../../Components/Inputs/Inputs';
import styles from './Style';
import { useEffect, useState } from 'react';
import Buttons from '../../Components/Buttons/Buttons';
import { useGetGroup, group } from '../../hooks/useGetGroup';
import Loading from '../../Components/Loading/Loading';
import LoadingMax from '../../Components/LoadingMax/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetWallsGroup, wall} from '../../hooks/useGetWallsGroup'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../type';
import { user } from '../../hooks/useRegister';
import Title from '../../Components/Title/Title'

import React from 'react';
import TabRoutes from '../../Navigation/tab.routes';
import ShowMural from '../../Components/ShowMural/ShowMural';
import { useGetGroupUserId } from '../../hooks/useGetGroupUserId';
import {useGetMembers, member} from '../../hooks/useGetMembers'

type ChooseCategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ChooseGroup'>;




type Props = {
  navigation: ChooseCategoryScreenNavigationProp;
};




export default function ChooseCategory({navigation}:Props) {

  const {authenticationWG} = useGetWallsGroup()
  const {authenticationAddG} = useGetGroupUserId()
  const {authenticationGetM} = useGetMembers()
  const {authenticationG} = useGetGroup()

  const [loading, setLoading] = useState(true)
  const [listGroup, setListGroup] = useState<group[]>([])
  const [user , setUser] = useState<user>()

  useEffect(()=>{
    AsyncStorage.getItem('@userInfor')
        .then(async (value) => {
            const userInfor = JSON.parse(value!);
            const userInformation:user = userInfor.data
            setUser(userInformation)
            if(userInformation.isAdmin){
              const group = authenticationAddG(userInformation.id!)
              group.then((element:group) =>{
                setListGroup(prevList => [...prevList, element])
                setLoading(false)
              })
            }else{
              const listMurais = authenticationGetM()
              listMurais.then((value)=>{
                value.map(valueMural=>{
                 if(valueMural.userId == userInformation.id){
                  const groupsList = authenticationG()
                  groupsList.then(groupValueList =>{
                    groupValueList.map(groupValue =>{
                      if(groupValue.id == valueMural.groupId){
                        console.log(groupValue)
                        setListGroup(prevList => [...prevList, groupValue])
                        setLoading(false)
                      }
                    })
                  })
                 }
                })
              })

            }
            
        })
        .catch((error) => {
          console.error('Erro ao recuperar informações do usuário:', error);
        });
  },[])

  useEffect(()=>{
    console.log(listGroup)
  },[listGroup])
    

  return (
    <View style={styles.allChooseGroup}>
       {loading?(
         <LoadingMax/>
       ): null}
        {user && listGroup.length!== 0?(
          <>
            {user.isAdmin?(
              <Title name={listGroup[0].name} category={listGroup[0].name} img={listGroup[0].imgGroup}/>
            ):(
              <Title name={user?.username!} category={user?.username!} img={user.profile_image}/>
            )}
          </>
        ):null}
        <View style={styles.viewMuraisChooseGroup}>
          <Text style={styles.textMuraisChooseGroup}>GRUPOS</Text>
          <ScrollView style={styles.viewShowMuraisChooseGroup} pagingEnabled contentContainerStyle={{ paddingBottom: 150 }}>
            
              {listGroup && listGroup.length !== 0?(
                listGroup.map((valueListGroup)=>(
                  <TouchableOpacity onPress={()=>{
                    
                  }}>
                      <ShowMural authentication={()=>{
                        }} name={valueListGroup.name} img={valueListGroup.imgGroup} idMural={valueListGroup.id} canceled={false}/>
                  </TouchableOpacity>
                )
                )
              ):null}
            
          </ScrollView>
        </View>
        <View style={{position:"absolute", width:"100%", bottom: 0, paddingBottom: 20,}}>
          <TabRoutes/>
        </View>
    </View>
  );
}