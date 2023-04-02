import { StyleSheet } from "react-native";
export const colors = {
  darkGreen: "#14532D",
  shinyGreen: "#5DB5AB",
  lightGreen: "#BCE0DC",
  ashenGreen: "#51615F",
  gray: "#AAA",
  lightGray: "#DDD",
  white: "#FFF",
  black: "#000",
  darkRed: "#961511",
  lightRed: "#FFCCCC",
  darkBlue: "#2063B2",
  lightBlue: "#3EF3FC",
  lightOrange: "#F8B3AA"
};

export const globalStyles = StyleSheet.create({
  button: {
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginTop: 10,
    width: "80%",
    fontFamily: "JosefinSans_700Bold",
  },

  primaryButton: {
    backgroundColor: colors.darkGreen,
  },

  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.darkGreen,
  },

  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "700",
  },

  secondaryButtonText: {
    color: colors.darkGreen,
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "700",
  },
});
