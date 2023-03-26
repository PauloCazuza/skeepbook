// eslint-disable-next-line no-use-before-define
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";

const Gradient = (): JSX.Element => {
  return (
    <LinearGradient
      colors={[colors.white, "transparent"]}
      style={styles.background}
    />
  );
};

export default Gradient;
