import { lightBlue, primaryBlue, secondaryBlue } from "../themes/_varibles";

const max = 100000, min = 10000;

export const DataHomeDummy = [
  {
    title: "Main dishes",
    subTitle:"Pizza",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
  {
    title: "Sides",
    subTitle:"Onion Rings",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
  {
    title: "Drinks",
    subTitle:"Coke",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
  {
    title: "Desserts",
    subTitle:"Ice Cream",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
  {
    title: "Main dishes",
    subTitle:"Risotto",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
  {
    title: "Sides",
    subTitle:"French Fries",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
  {
    title: "Drinks",
    subTitle:"Water",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
  {
    title: "Desserts",
    subTitle:"Cheese Cake",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
  },
];

export const dataGraficPaiChart = [
  {
    name: "Utilidades",
    population: 42,
    color: primaryBlue,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Estudios",
    population: 30,
    color: secondaryBlue,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
    
  },
  {
    name: "jevita",
    population: 28,
    color: lightBlue,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
    
  },
];
