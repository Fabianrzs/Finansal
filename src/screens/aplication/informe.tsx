import React from "react";
import { Dimensions, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { graywhite, primaryBlue } from "../../themes/_varibles";


export default function Informe(){
  const data = [
    {
      name: "GASTO 1",
      population: 215000,
      color: graywhite,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "GASTO 2",
      population: 280000,
      color: primaryBlue,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "GASTO 3",
      population: 52761,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const graphicData = [{ y: 10, x: '5%'},{ y: 90, x: '90%'},{ y: 50, x: '50%'},{ y: 20, x: '20%'},{ y: 70, x: '70%'},]
  return (
    <View>
      <View>
        <PieChart
          data={data}
          width={screenWidth}
          height={300}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"20"}
          center={[10, 50]}/>
          <VictoryPiedata 
            data= {this.state.graphicData}width={250}height={250}innerRadius={50}style={{labels: {fill: 'white', fontSize: 15, padding: 7,}, }}/> 
      </View>  
    </View>
  )
}
