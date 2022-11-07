import { Text, View } from "react-native";
import { LoginValues, RegisterValues, UserLogin, UserRegister } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import { darkBlack, lightWhite, primaryBlue, secondaryWhite } from "../../themes/_varibles";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
import Background from "../../components/background";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthContext";


export default function RegisterScreen ({ navigation }:any){
  
  const [loader, setLoader] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  const { onChange, form,
    password,firstName,lastName,email } =
    useForm<UserRegister>(RegisterValues)
  
  const {signUp, errorMessage, removeError} = useContext(AuthContext)
  
  const onSubmit = () => {
    signUp(form).finally(() => setLoader(false))
  }
  
  useEffect(()=>{
    errorMessage.length > 0 && setOpen(true)
    /*Alert.alert('Login Incorrecto',errorMessage,[{text: 'Ok', onPress: removeError}])*/
  },[errorMessage])
  
  const Form = <View>
    <Input onChange={onChange} value={firstName}
           name={'firstName'} label={'Nombre'}  keyboardType={"default"} dark/>
    <Input onChange={onChange} value={lastName}
           name={'lastName'} label={'Apellido'}  keyboardType={"default"} dark/>
    <Input onChange={onChange} value={email}
           name={'email'} label={'Correo '}  keyboardType={"email-address"} dark/>
    <Input onChange={onChange} value={password}
           name={'password'} label={'Contraseña '}  keyboardType={"default"}
           secureTextEntry={true} dark/>
  </View>
  
  const body = <Text style={{color:secondaryWhite}}>{errorMessage}</Text>
  
  return(
    <>
      <View style={{ ...styles.container, backgroundColor: lightWhite }}>
        <Background rotate={"65 deg"}  white/>
        <Modal body={body} visible={open}
               setVisible={setOpen} title={"Error al Registrarse"}
               transparent optionalFuction={removeError}
        />
        <Button stylesButton={styles.buttonLogear}
                stylesText={styles.textButton}
                title="Atras"
                colorText='dark'
                onPress={()=> navigation.replace('Login')}
        />
        <View>
          <Text style={{...styles.title, color:lightWhite}}>Registrar</Text>
          {Form}
          <Button
            loader={loader}
            title="Registro"
            colorText='primary'
            typeButton={'btn'}
            onPress={onSubmit}
          />
        </View>
      </View>
    </>
  )
}
