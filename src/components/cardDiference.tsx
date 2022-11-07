import React from "react";
import { View, Text } from "react-native";
import {styles} from '../themes/components/Card.themes';
import Icon from "./common/Icon";
import { lightWhite } from "../themes/_varibles";

interface CardProps {
  value: number,
  percentage: number,
  low?: boolean,
}

export default function CardDiference(props: CardProps){
    const {value, percentage, low} = props

    return (
        <View style={styles.container}>
            <View style={[low ? styles.barLeftRed: styles.barLeftgren, styles.barLeft]}>
              <Text>
                <Icon name={(!low)?"arrow_upward": "arrow_downward"} color={lightWhite}/>
              </Text>
            </View>
            <Text style={styles.text}>Peso</Text>
            <Text style={styles.textvalue}>${value}</Text>
            <Text style={[styles.textpercentage, low ? styles.textLeftRed: styles.textLeftgren]}>{percentage}%</Text>
        </View>
    );
}

