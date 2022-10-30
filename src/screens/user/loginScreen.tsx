import { Image, Text, View } from "react-native";
import { LoginValues, UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import React, { useContext, useState } from "react";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
import Logo from "../../components/logo";
import Background from "../../components/background";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthContext";

export default function LoginScreen ({ navigation }:any){

  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("");
  const { onChange, form, email, password } = useForm<UserLogin>(LoginValues)
  
  const {signIn} = useContext(AuthContext)
  
  
  const onSubmit = () => {
      signIn(form)
  }
  
  const Form = <View>
    <Input onChange={onChange} value={email} label={'Nombre de Usuario'}
           name={"email"} keyboardType={"default"}/>
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
