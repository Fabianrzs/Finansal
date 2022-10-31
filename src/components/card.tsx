import React from "react";
import { View, Text } from "react-native";
import {styles} from '../themes/components/Card.themes';

interface CardProps {
    value: number,
    percentage: number
}

export default function Card(props: CardProps){
    const {value, percentage } = props

    return (
        <View style={styles.container}>
            <View style={styles.ramdom}></View>
            <Text style={styles.text}>Peso</Text>
            <Text style={styles.textvalue}>${value}</Text>
            <Text style={styles.textpercentage}>{percentage}%</Text>
        </View>
    );
}

