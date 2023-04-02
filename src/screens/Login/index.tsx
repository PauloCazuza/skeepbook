import { Center, Image, Text, View } from "native-base";
import { colors } from "../../Assets/GlobalStyles";
import IconTemporary from "../../Assets/icon-temporary.png";
import FormLogin from "../../components/FormLogin";
import Gradient from "../../components/Gradient";
import { styles } from "./styles";

function Login() {
  return (
    <View style={styles.container}>
      <Gradient colorInitial={colors.darkBlue} topColor={false} />
      <View flex={1} alignItems="center" justifyContent="center">
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
        </Center>
      </View>
      <View flex={1}>
        <FormLogin />
      </View>
    </View>
  );
}

export default Login;