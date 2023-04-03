import { Text, View } from "native-base";

function Footer() {
  return (
    <View position="absolute" bottom={0}>
      <Text fontFamily="regular">
        1.0.0
      </Text>
    </View>
  );
}

export default Footer;