import { Utility } from "../models/Utility";
import { dangerRed, lightBlue, lightRed, primaryBlue, secondaryBlue, secondaryRed } from "../themes/_varibles";

const max = 100000, min = 10000;

export const DataHomeDummy:Utility = [
  {
    name: "Main dishes",
    subCategory:"Pizza",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Sides",
    subCategory:"Onion Rings",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Drinks",
    subCategory:"Coke",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Desserts",
    subCategory:"Ice Cream",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Main dishes",
    subCategory:"Risotto",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Sides",
    subCategory:"French Fries",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Drinks",
    subCategory:"Water",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Desserts",
    subCategory:"Cheese Cake",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
];

export const dataGraficPaiChartBlue = [
  {
    name: "Trabajo",
    population: 42,
    color: primaryBlue,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Jea",
    population: 30,
    color: secondaryBlue,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
    
  },
  {
    name: "Realizacion ",
    population: 28,
    color: lightBlue,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
    
  },
];
export const dataGraficPaiChartRed = [
  {
    name: "Estudios",
    population: 30,
    color: secondaryRed,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
    
  },
  {
    name: "jevita",
    population: 28,
    color: lightRed,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
    
  },
  {
    name: "Utilidades",
    population: 42,
    color: dangerRed,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
];
