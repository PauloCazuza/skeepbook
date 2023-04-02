// eslint-disable-next-line no-use-before-define
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";

interface IGradientParams {
  colorInitial?: string;
  topColor?: boolean;
}

const Gradient = ({ colorInitial = colors.white, topColor = true }: IGradientParams): JSX.Element => {
  return (
    <LinearGradient
      colors={topColor ? [colorInitial, "transparent"] : ["transparent", colorInitial]}
      style={styles.background}
    />
  );
};

export default Gradient;
