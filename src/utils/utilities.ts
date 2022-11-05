export const iconByName = (route: string): string => {
  switch (route){
    case 'Home': return "house"
    case 'Informe':return "list_alt"
    case 'Registros':return "app_registration"
  }
  return ""
}
