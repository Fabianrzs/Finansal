export interface Utility{
  name: string,
  subCategory: string,
  value: number | null,
  date: Date | null,
  comentario: string
}

export const UtilityValues: Utility = {
 name: "",
  subCategory: "",
  value: null,
  date: null,
  comentario: ""
}
