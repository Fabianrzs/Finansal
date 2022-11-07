export interface Utility{
  name: string,
  subCategory: string,
  value: number|null,
  date: Date|string,
  comentario: string
}

export const UtilityValues: Utility = {
  name: "",
  subCategory: "",
  value: null,
  date: new Date(),
  comentario: ""
}
