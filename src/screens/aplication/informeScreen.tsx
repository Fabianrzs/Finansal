import React from "react";
import { SafeAreaView, ScrollView,Text, View, Dimensions} from "react-native";
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

export default function Informe(){
  
  const chartConfig = {
    
    backgroundGradientFrom: "#bf00ff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#0b00a2",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  
  const data = [
    {
      name: "GASTO 1",
      population: 215000,
      color: "#6081EA",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "GASTO 2",
      population: 28000,
      color: "#2FC4E0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "GASTO 3",
      population: 85380,
      color: "#2247BA",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];
  
  const screenWidth = Dimensions.get("screen").width
  
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[10, 10]}
        absolute
      />
      <View style={styles.containerbuttom}>
        <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles} title="Gastos"  onPress={()=>{

        }}/>
        <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles} title="Ingresos" onPress={()=>{

        }}/>
      </View>
      <View style={styles.areaSafe}>
        <SafeAreaView >
            <ScrollView>
              {
                DataInfoDummy.map((data1, index)=>
                  <CardUtility key={index} title={data1.title} low={true}
                           subTitle={data1.subTitle} value={data1.value}/> )
              }
            </ScrollView>
        </SafeAreaView>
        </View>
    </View>
  )
}

