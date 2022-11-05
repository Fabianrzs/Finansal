import React from "react";
import { SafeAreaView, ScrollView, SectionList, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import CardDiference from "../../components/cardDiference";
import { styles } from "../../themes/scream/home/Home.themes";
import CardUtility from "../../components/cardUtility";
import { DataHomeDummy } from "../../utils/DummyData";
export default function HomeScreen(){
  
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textValue}> 25.000.812 </Text>
        <Text style={styles.textSaldo}> Saldo a Favor </Text>
        <Text style={styles.textUser}>Danneb</Text>
      </View>
      <View>
        <View style={styles.containercard}>
          <CardDiference value={7500} percentage={20.4}/>
          <CardDiference low value={200000} percentage={79.6}/>
        </View>
      </View>
      <Text style={styles.subtitle}>Historial</Text>
      <SafeAreaView style={{
        flex: 1,
      }}>
        <ScrollView>
          {
            DataHomeDummy.map((data, index)=>
              <CardUtility key={index} title={data.title} low={index%2===0}
                           subTitle={data.subTitle} value={data.value}/> )
          }
        </ScrollView>
        
        {/*<SectionList
          sections={DataHomeDummy}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => }
        />*/}
      </SafeAreaView>
     
    </View>
  )
}

