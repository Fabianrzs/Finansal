import React from "react";
import { Dimensions, Text, View } from "react-native";
import { PieChart,} from "react-native-chart-kit";
import { dataGraficPaiChartBlue, dataGraficPaiChartRed } from "../../utils/DummyData";
import { chartConfig } from "../../utils/ChartConfig";

export default function InformeScreen(){
  
  const screenWidth = Dimensions.get("screen").width
  
  return(
    <View>
      <PieChart
        data={dataGraficPaiChartBlue}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[10, 10]}
        absolute
      />
      <PieChart
        data={dataGraficPaiChartRed}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[10, 10]}
        absolute
      />
    </View>
  )
}
