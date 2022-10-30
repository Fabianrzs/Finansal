import { Image, Text, View } from "react-native";
import { LoginValues, UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
import Logo from "../../components/logo";
import Background from "../../components/background";
import { useForm } from "../../hooks/useForm";

export default function LoginScreen ({ navigation }:any){

  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("");
  const { onChange, form, userName, password } = useForm<UserLogin>(LoginValues)
  
  const onSubmit = () => {
      console.log(form);
    }
  
  const Form = <View>
    <Input onChange={onChange} value={userName} label={'Nombre de Usuario'}
           name={"userName"} keyboardType={"default"}/>
    <Input onChange={onChange} value={password} label={'Contraseña'}
           name={"password"}  keyboardType={"default"} secureTextEntry={true}/>
  </View>
  const modalBody = <Text style={{color : 'red'}}>{message}</Text>
  return(
    <View>
      <Background rotate={"-65 deg"} />
      <View style={styles.container}>
        <Logo/>
        <Modal title={"Error al Iniciar Session"} body={modalBody} visible={open} setVisible={setOpen} transparent={true}/>
        <Text style={styles.title}>Login</Text>
        {Form}
        <Button
          colorText='light'
          typeButton='outlet'
          title="Login"
          onPress={onSubmit}
        />
        <Button stylesButton={styles.buttonRegister}
                stylesText={styles.textButton}
                title="Registrarse"
                colorText='dark'
                onPress={()=> navigation.replace('Register')}
        />
      </View>
    </View>
  )
}
