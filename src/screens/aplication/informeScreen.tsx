import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Dimensions, TouchableOpacity } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import CardUtility from "../../components/cardUtility";
import Button from "../../components/common/Button";
import { styles } from "../../themes/scream/home/Info.themes";
import { DataInfoDummy } from "../../utils/DummyDataInfo";
import { chartConfig, screenWidth } from "../../utils/ChartConfig";
import { dataGraficPaiChartBlue, dataGraficPaiChartRed, DataHomeDummy } from "../../utils/DummyData";
import { Utility } from "../../models/Utility";

export default function Informe({navigation}:any){

  const [stateColor, setStateColor] = useState(false);
  
  const redirect = (data:Utility) => {
    navigation.navigate("Details",{data,stateColor})
  }
  
  return (
    <View style={styles.container}>
      {(!stateColor) ? <PieChart
        data={dataGraficPaiChartBlue}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[10, 10]}
        absolute
      /> : <PieChart
        data={dataGraficPaiChartRed}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[10, 10]}
        absolute
      />}
      <View style={styles.containerbuttom}>
        <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles} title="Ingresos"
                onPress={()=>setStateColor(false)}/>
        <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles} title="Gastos"
                onPress={()=>setStateColor(true)}/>
      </View>
      <View style={styles.areaSafe}>
        <SafeAreaView >
            <ScrollView>
              {
                DataHomeDummy.map((data: Utility, index:number)=>
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.7}
                    onPress={()=>redirect(data)}
                  >
                    <CardUtility key={index} name={data.name} low={stateColor}
                                 date={new Date(data.date)} value={Number(data.value)}/>
                  </TouchableOpacity>
                   )
              }
            </ScrollView>
        </SafeAreaView>
        </View>
    </View>
  )
}

