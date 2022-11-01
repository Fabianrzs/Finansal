import { Alert, Image, Text, View } from "react-native";
import { LoginValues, UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
import Logo from "../../components/logo";
import Background from "../../components/background";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthContext";
import { lightWhite, secondaryWhite } from "../../themes/_varibles";

export default function LoginScreen ({ navigation }:any){

  const [open, setOpen] = useState<boolean>(false)
  const { onChange, form, email, password } = useForm<UserLogin>(LoginValues)
  const [loader, setLoader] = useState<boolean>(false)
  const {signIn, errorMessage, removeError} = useContext(AuthContext)
  
  
  const onSubmit = () => {
    setLoader(true)
      signIn(form).finally(() => setLoader(false))
  }
  
  useEffect(()=>{
    errorMessage.length > 0 && setOpen(true)
      /*Alert.alert('Login Incorrecto',errorMessage,[{text: 'Ok', onPress: removeError}])*/
  },[errorMessage])
  
  const Form = <View>
    <Input onChange={onChange} value={email} label={'Correo Electronico'}
           name={"email"} keyboardType={"default"}/>
    <Input onChange={onChange} value={password} label={'Contraseña'}
           name={"password"}  keyboardType={"default"} secureTextEntry={true}/>
  </View>
  const modalBody = <Text style={{color : secondaryWhite}}>{errorMessage}</Text>
  return(
    <View>
      <Background rotate={"-65 deg"} />
      <View style={styles.container}>
        <Logo/>
        <Modal title={"Error al Iniciar Session"} body={modalBody}
               visible={open} setVisible={setOpen} transparent={true}
               optionalFuction={removeError}
        />
        <Text style={styles.title}>Login</Text>
        {Form}
        <Button
          loader={loader}
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
