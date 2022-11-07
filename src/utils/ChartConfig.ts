import { Dimensions } from "react-native";

export const chartConfig = {
  backgroundGradientFrom: "#bf00ff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#0b00a2",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export const screenWidth = Dimensions.get("screen").width
