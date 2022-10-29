import { Text, View } from "react-native";
/*
import { SubmitHandler, useForm } from "react-hook-form";
*/
import { UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
import { login } from "../../services/authService";

export default function LoginScreen ({ navigation }:any){

  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("");
/*
  const {...methods} = useForm<UserLogin>();
*/
  
  /*const onSubmit: SubmitHandler<UserLogin> =
    async (data) => {
      console.log(data);
      /!*navigation.navigate('Loged')*!/
      await login(data).then((response) => {
        console.log(response)
      }).catch((err) => {
        setMessage("Error")
        setOpen(true)
        console.log(err)
      })
    }*/
  
  const formBody = <View>
    <Input label={'Username'} keyboardType={"default"}/>
    <Input label={'Password'} keyboardType={"default"} secureTextEntry={true}/>
  </View>
  const modalBody = <Text style={{color : 'red'}}>{message}</Text>
  return(
    <View style={styles.container}>
      <Modal title={"Error al Iniciar Session"} body={modalBody} visible={open} setVisible={setOpen} transparent={true}/>
      <Text style={styles.title}>LOGIN</Text>
      <Form methods={{/*methods*/}} body={formBody}/>
      <Button
        colorText='light'
        typeButton='outlet'
        title="Login"
        onPress={/*methods.handleSubmit(onSubmit)*/()=>{}}
      />
      <Button stylesButton={{padding: 5, border: 1}}
        title="Register"
        colorText='dark'
        onPress={()=> navigation.navigate('Register')}
      />
    </View>
  )
}
