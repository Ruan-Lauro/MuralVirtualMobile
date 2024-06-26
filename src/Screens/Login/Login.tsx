import { StyleSheet, Text, View, Image, Vibration } from 'react-native';
import Input from '../../Components/Inputs/Inputs';
import styles from './Style';
import { useEffect, useState } from 'react';
import Buttons from '../../Components/Buttons/Buttons';
import { useAuthLogin } from '../../hooks/useAuthLogin';
import Loading from '../../Components/Loading/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../type';
import React from 'react';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};



export default function Login({navigation}:Props) {

  const {authenticationE} = useAuthLogin()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [inforUser, setInforUser] = useState()
  const [reject, setReject] = useState(false)
  const [load, setLoad] = useState(false)

  const authenLogin = () =>{

    const res = authenticationE(email, password)
    setLoad(true)
    res.then((data) =>{
      if(data === "Não passou"){
        setLoad(false)
        Vibration.vibrate()
        setReject(true)
      }else{
        setLoad(false)
        setReject(false)
        setInforUser(data)
        AsyncStorage.setItem('@userInfor', JSON.stringify(data))
        .then(() => {
          console.log('Informações do usuário armazenadas com sucesso.');
          navigation.navigate('ChooseGroup')
        })
        .catch((error) => {
          console.error('Erro ao armazenar informações do usuário:', error);
        });
        console.log(data)
      }
    })
    
  }



  return (
    <View style={styles.allLogin}>
      <Image style={styles.imgLogin} source={require('../../../assets/Imagens.png')}/>
      
      <View style={styles.inputView}>
        <Input placeholder='Email' value={email} onchange={setEmail} type='emailAddress' Secure={false} reject={reject} Variant='login'/>
        <Input placeholder='Senha' value={password} onchange={setPassword} type='password' Secure={true} reject={reject} Variant='login'/>
        <Text style={styles.inputViewText}>Esqueceu a senha?</Text>
        {reject?(
        <Text style={styles.textReject}>E-mail ou senha incorreta</Text>
      ):null}
      
      </View>
      
      <Buttons textButton='Login' Condition={true} authentication={authenLogin}/>
      <Text style={styles.TextButtonBottom} onPress={()=>{
         navigation.navigate('Register')
      }}>Cadastre-se</Text>
      {load?(
        <Loading/>
      ):null}
    </View>
  );
}