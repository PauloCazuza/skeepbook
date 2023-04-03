import { Center, Heading, Image, Text, View } from "native-base";
import { colors } from "../../assets/GlobalStyles";
import IconTemporary from "../../assets/icon-temporary.png";
import FormLogin from "../../components/FormLogin";
import Gradient from "../../components/Gradient";
import { styles } from "./styles";
import Footer from "../../components/Footer";

function Login() {
  return (
    <View style={styles.container}>
      <Gradient colorInitial={colors.darkBlue} topColor={false} />
      <View flex={3} alignItems="center" justifyContent="center">
        <Center>
          <View
            backgroundColor="rgba(212, 210, 210, 0.297)"
            borderWidth="1"
            borderColor="blue.500"
            padding={2}
            rounded={500}

          >
            <Image
              source={IconTemporary}
              resizeMode="contain"
              alt="Alternate Text"
              size={150}
            />
          </View>
          <Heading color="white" size="2xl" >
            <Text style={{ fontFamily: "regular" }}>
              SHEEP BOOK
            </Text>
          </Heading>
        </Center>
      </View>
      <View flex={2}>
        <FormLogin />
      </View>
      <Footer />
    </View>
  );
}

export default Login;