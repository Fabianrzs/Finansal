import { Utility } from "../models/Utility";

const max = 100000, min = 10000;

export const DataInfoDummy:Utility = [
  {
    name: "Main dishes",
    subCategory: '28 Oct, 2022',
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Sides",
    subCategory:"26 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) - min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Drinks",
    subCategory:"22 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Desserts",
    subCategory:"20 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Main dishes",
    subCategory:"19 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Sides",
    subCategory:"18 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Drinks",
    subCategory:"15 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Desserts",
    subCategory:"14 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
  {
    name: "Desserts",
    subCategory:"",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date("14/10/2022"),
    comentario: "",
  },
  {
    name: "Desserts",
    subCategory:"14 Oct, 2022",
    value: Math.trunc(Math.random() * (max - min + 1) + min),
    date: new Date(),
    comentario: "",
  },
];